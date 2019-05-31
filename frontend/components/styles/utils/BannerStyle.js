import styled from 'styled-components';


const BannerStyle = styled.div`
    width: 100%;
    height: auto;
    font-size: 2.5rem;
    text-align: center;
    font-style: italic;
    letter-spacing: .4rem;
    color: rgba(0, 0, 0, 0.6);
    padding: 6rem 0;
    background-image: linear-gradient(
        to right bottom,
        rgba(255, 255, 255, 0.7),
        rgba(255, 255, 255, 0.7)
    ),
    url('/static/images/background3.jpg');
    background-size: cover;
    background-position: center center;
    box-shadow: 2px 2px 2px ${props => props.theme.lightgrey};
    border-radius: 2px;
`;

export default BannerStyle;