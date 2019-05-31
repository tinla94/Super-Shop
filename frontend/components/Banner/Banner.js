import React from 'react';
import BannerStyle from '../styles/utils/BannerStyle';


const Banner = (props) => {
    return(
        <BannerStyle>
            <h4>{props.text}</h4>
        </BannerStyle>
    )
};


export default Banner;

