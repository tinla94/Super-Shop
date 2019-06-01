import React from 'react';
import styled from 'styled-components';


const FooterStyle = styled.footer`
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2rem;
    font-size: 1.5rem;
    letter-spacing: .2rem;
    width: 100%;
    color: ${props => props.theme.darkgrey};
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.mainColor};
`

const Footer = () => {
    return (
        <FooterStyle>
            @2019 Created By: Cuong La
        </FooterStyle>
    )
};

export default Footer;


