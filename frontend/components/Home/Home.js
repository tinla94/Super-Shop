import React from 'react';
import Link from 'next/link';
import PageBrand from '../styles/font/PageBrand';
import HomeStyles from '../styles/home/HomeStyles';
import { MainButton } from '../styles/button/Button';

const Home = () => {
    return(
        <HomeStyles>
            <div className="home-content">
                <h1 className="home-title">Greeting from <PageBrand>SuperShoes</PageBrand></h1>
                <h2 className="home-title-sub">Your <PageBrand>Footwear</PageBrand> To Everywhere</h2>
                <p>Explore our shop today to find your matching shoes!!!</p>
                <Link href="/items">
                    <MainButton>
                        Explore Now
                    </MainButton>
                </Link>
            </div>
        </HomeStyles>
    )
}

export default Home;