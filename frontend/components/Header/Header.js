import Link from 'next/link';
import Nav from './Nav';
import Router from 'next/router';
import NProgress from 'nprogress';
import Cart from '../Cart/Cart';
import Search from '../Utils/Search';

// page loading
Router.onRouteChangeStart = () => {
    NProgress.start();
}
Router.onRouteChangeComplete = () => {
    NProgress.done();
}
Router.onRouteChangeError = () => {
    NProgress.remove();
}

const Header = () => (
    <>
        <div className="nav">
            <div className="nav-top">
                <div className="nav-top-brand">
                    <Link href="/">
                        <a>Super Shoes</a>
                    </Link>
                </div>
            </div>
            <Nav />
        </div>
        <div className="sub-bar">
            <Search />
        </div>
        <Cart />
    </>
)

export default Header;