const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { randomBytes } = require('crypto');
const { promisify } = require('util');
const { transport, emailTemplate } = require('../mail');
const stripe = require('../stripe');
const { hasPermission } = require('../utils');


const Mutations = {
    async createItem(parent, args, ctx, info) {
      // TODO: Check if they are logged in
      if(!ctx.request.userId) {
        throw new Error('You must be logged in!')
      }

      const item = await ctx.db.mutation.createItem(
        {
          data: {
            // This is how to create a relationship between the Item and the User
            user: {
              connect: {
                id: ctx.request.userId,
              },
            },
            ...args,
          },
        },
        info
      );
      return item;
    },
    updateItem(parent, args, ctx, info) {
      // first take a copy of the updates
      const updates = { ...args };
      // remove the ID from the updates
      delete updates.id;
      // run the update method
      return ctx.db.mutation.updateItem(
        {
          data: updates,
          where: {
            id: args.id,
          },
        },
        info
      );
    },
    async deleteItem(parent, args, ctx, info) {
      const where = { id: args.id };
      // 1. find the item
      const item = await ctx.db.query.item({ where }, `{ id title user { id }}`);
      // 2. Check if they own that item, or have the permissions
      const ownsItem = item.user.id === ctx.request.userId;
      const hasPermissions = ctx.request.user.permissions.some(permission =>
        ['ADMIN', 'ITEMDELETE'].includes(permission)
      );
  
      if (!ownsItem && !hasPermissions) {
        throw new Error("You don't have permission to delete the item!");
      }
  
      // 3. Delete it!
      return ctx.db.mutation.deleteItem({ where }, info);
    },
    async signup(parent, args, ctx, info) {
      // lowercase their email
      args.email = args.email.toLowerCase();
      // hash their password
      const password = await bcrypt.hash(args.password, 10);
      // create the user in the database
      const user = await ctx.db.mutation.createUser(
        {
          data: {
            ...args,
            password,
            permissions: { set: ['USER'] },
          },
        },
        info
      );
      // create the JWT token for them
      const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
      // We set the jwt as a cookie on the response
      ctx.response.cookie('token', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
      });
      // Finalllllly we return the user to the browser
      return user;
    },
    async signin(parent, { email, password }, ctx, info) {
      // 1. check if there is a user with that email
      const user = await ctx.db.query.user({ where: { email } });
      if (!user) {
        throw new Error(`No user found for this email ${email}`);
      }
      // 2. Check if their password is correct
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        throw new Error('Invalid Password!');
      }
      // 3. generate the JWT Token
      const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
      // 4. Set the cookie with the token
      ctx.response.cookie('token', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 365,
      });
      // 5. Return the user
      return user;
    },
    signout(parent, args, ctx, info) {
      ctx.response.clearCookie('token');
      return { message: 'You have logged out!'}
    },
    async requestReset(parent, args, ctx, info) {
      // 1. Check for user in db
      const user = await ctx.db.query.user({ where: {email: args.email }});
      if(!user) {
        throw new Error(`No user found for this email ${args.email}`);
      }
      // 2. Generate reset token
      const resetToken = (await promisify(randomBytes)(20)).toString('hex');
      const resetTokenExpiry = Date.now() + 3600000;
      const res = await ctx.db.mutation.updateUser({
        where: { email: args.email },
        data: { resetToken, resetTokenExpiry }
      });
      // 3. Email user their reset token
      const mailRes = await transport.sendMail({
        from: 'super-shoes.heroku.com',
        to: user.email,
        subject: 'Password Reset Link',
        html: emailTemplate(`Click the following link to reset your password 
        \n\n 
        <a href="${process.env
          .FRONTEND_URL}/reset?resetToken=${resetToken}">
          ${process.env
            .FRONTEND_URL}/reset?resetToken=${resetToken}  
        </a>`)
      })
      // 4. Return message
      return { message: 'Thanks!'};
    },
    async resetPassword(parent, args, ctx, info) {
      // 1. check matching passwords
      if (args.password !== args.confirmPassword) {
        throw new Error("Passwords are not matching!");
      }
      // 2. check for legi reset token
      // 3. check for reset token expiration
      const [user] = await ctx.db.query.users({
        where: {
          resetToken: args.resetToken,
          resetTokenExpiry_gte: Date.now() - 3600000,
        },
      });
      if (!user) {
        throw new Error('Token is invalid or expired!');
      }
      // 4. hash new password
      const password = await bcrypt.hash(args.password, 10);
      // 5. save new password and remove reset token
      const updatedUser = await ctx.db.mutation.updateUser({
        where: { email: user.email },
        data: {
          password,
          resetToken: null,
          resetTokenExpiry: null,
        },
      });
      // 6. generate new token for new password
      const token = jwt.sign(
        { userId: updatedUser.id },
        process.env.APP_SECRET
        );
      // 7. set jwt cookie
      ctx.response.cookie('token', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 365,
      });
      // 8. return new user
      return updatedUser;
    },
  async updatePermissions(parent, args, ctx, info) {
    // 1. Check user log in
    if(!ctx.request.userId) {
      throw new Error('You must log in!')
    }
    // 2. Query current user
    const currentUser = await ctx.db.query.user({
      where: {
        id: ctx.request.userId
      }
    }, info);
    // 3. Check user permissions
    hasPermission(currentUser, ['ADMIN', 'PERMISSIONUPDATE']);
    // 4. Update permissions  
    return ctx.db.mutation.updateUser({
      data: {
        permissions: {
          set: args.permissions
        },
      },
      where: {
        id: args.userId
      },
    }, info);
  },
  async addToCart(parent, args, ctx, info) {
    // 1. Make sure they are signed in
    const { userId } = ctx.request;
    if (!userId) {
      throw new Error('You must log in!');
    }
    // 2. Query the users current cart
    const [existingCartItem] = await ctx.db.query.cartItems({
      where: {
        user: { id: userId },
        item: { id: args.id },
      },
    });
    // 3. Check if that item is already in their cart and increment by 1 if it is
    if (existingCartItem) {
      console.log('This item is already in their cart');
      return ctx.db.mutation.updateCartItem(
        {
          where: { id: existingCartItem.id },
          data: { quantity: existingCartItem.quantity + 1 },
        },
        info
      );
    }
    // 4. If its not, create a fresh CartItem for that user!
    return ctx.db.mutation.createCartItem(
      {
        data: {
          user: {
            connect: { id: userId },
          },
          item: {
            connect: { id: args.id },
          },
        },
      },
      info
    );
  },
  async removeFromCart(parent, args, ctx, info) {
    // 1. Find the cart item
    const cartItem = await ctx.db.query.cartItem(
      {
        where: {
          id: args.id,
        },
      },
      `{ id, user { id }}`
    );
    // 1.5 Make sure we found an item
    if (!cartItem) throw new Error('No Cart Item Found!');
    // 2. Make sure they own that cart item
    if (cartItem.user.id !== ctx.request.userId) {
      throw new Error('Cheatin huhhhh');
    }
    // 3. Delete that cart item
    return ctx.db.mutation.deleteCartItem(
      {
        where: { id: args.id },
      },
      info
    );
  },
  async createOrder(parent, args, ctx, info) {
    // 1. Query the current user and make sure they are signed in
    const { userId } = ctx.request;
    if (!userId) throw new Error('You must be signed in!');
    const user = await ctx.db.query.user(
      { where: { id: userId } },
      `{
      id
      name
      email
      cart {
        id
        quantity
        item { title price id description image largeImage }
      }}`
    );
    // 2. recalculate the total for the price
    const amount = user.cart.reduce(
      (tally, cartItem) => tally + cartItem.item.price * cartItem.quantity,
      0
    );
    // 3. Create the stripe charge (turn token into $$$)
    const charge = await stripe.charges.create({
      amount,
      currency: 'USD',
      source: args.token,
    });
    // 4. Convert the CartItems to OrderItems
    const orderItems = user.cart.map(cartItem => {
      const orderItem = {
        ...cartItem.item,
        quantity: cartItem.quantity,
        user: { connect: { id: userId } },
      };
      delete orderItem.id;
      return orderItem;
    });

    // 5. create the Order
    const order = await ctx.db.mutation.createOrder({
      data: {
        total: charge.amount,
        charge: charge.id,
        items: { create: orderItems },
        user: { connect: { id: userId } },
      },
    });
    // 6. Clean up - clear the users cart, delete cartItems
    const cartItemIds = user.cart.map(cartItem => cartItem.id);
    await ctx.db.mutation.deleteManyCartItems({
      where: {
        id_in: cartItemIds,
      },
    });
    // 7. Return the Order to the client
    return order;
  },
};


module.exports = Mutations;
