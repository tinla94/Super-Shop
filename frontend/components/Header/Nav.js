import Link from 'next/link';
import User from '../User/User';
import Signout from '../Auth/Signout';
import { Mutation } from 'react-apollo';
import { TOGGLE_CART_MUTATION } from '../Cart/Cart';
import CartCount from '../Cart/CartCount';

const Nav = () => (
    <User>
        {({ data: { me } }) => (
        <div className="nav-bottom">
            <Link href="/items">
                <a>Shop</a>
            </Link>
            {me && (
            <>
                <Link href="/sell" className="nav-link">
                    <a>Sell</a>
                </Link>
                <Link href="/orders" className="nav-link">
                    <a>Orders</a>
                </Link>
                <Link href="/me" className="nav-link">
                    <a>Account</a>
                </Link>
                <Signout />
                <Mutation mutation={TOGGLE_CART_MUTATION}>
                    {(toggleCart) => (
                        <button onClick={toggleCart}>
                            My Cart
                            <CartCount count={me.cart.reduce((tally, cartItem) =>  tally + cartItem.quantity, 0)}/>
                        </button>
                    )}
                </Mutation>
            </>
            )}
            {!me && (
                <>
                    <Link href="/signin" className="nav-link">
                        <a>SignIn</a>
                    </Link>
                    <Link href="/signup" className="nav-link">
                        <a>SignUp</a>
                    </Link>
                </>
            )}
        </div>
        )}
    </User>
)

export default Nav;