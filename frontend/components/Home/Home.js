import React from 'react';
import Link from 'next/link';

const Home = () => {
    return(
        <div className="home">
            <div className="home-content">
                <h1 className="home-title">Greeting from <span className="page-brand">SuperShoes</span></h1>
                <h2 className="home-title-sub">Your <span className="page-brand">Footwear</span> To Everywhere</h2>
                <p>Explore our shop today to find your matching shoes!!!</p>
                <Link href="/items">
                    <button className="button button-main">
                        Explore Now
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home;