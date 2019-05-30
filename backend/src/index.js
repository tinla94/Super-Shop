require('dotenv').config({ path: 'variables.env' });
const cookieParser = require('cookie-parser');
const createServer = require('./createServer');
const db = require('./db');
const server = createServer();
const jwt = require('jsonwebtoken');


// Handle cookies(JWT)
server.express.use(cookieParser());
// Decode JWT
server.express.use((req, res, next) => {
  const { token } = req.cookies;
  if(token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    // decode token and request user id
    req.userId = userId;
  }
  next();
});

// Create middleware that populates the user on each request
server.express.use(async (req, res, next) => {
  // if they aren't logged in, skip this
  if (!req.userId) return next();
  const user = await db.query.user(
    { where: { id: req.userId } },
    '{ id, permissions, email, name }'
  );
  req.user = user;
  next();
});

server.start(
    {
      cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL,
      },
    },
    deets => {
      console.log(`Server is now running on port http://localhost:${deets.port}`);
    }
  );