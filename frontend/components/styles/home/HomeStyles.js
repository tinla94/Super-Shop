import styled from 'styled-components';

const HomeStyles = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(
        to right bottom,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.6)
    ),
    url('/static/images/background1.jpg');
    background-size: cover;
    background-position: center center;
    color: white;
    text-align: center;

    .home-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
    }

    .home-title {
        font-size: 4rem;
        letter-spacing: .3rem;
        margin-bottom: 2.5rem;
    }

    .home-title-sub {
        font-size: 2.8rem;
        letter-spacing: .3rem;
    }

    p {
        letter-spacing: .15rem;
        font-size: 1.5rem;
        margin: 1rem 0;
    }
`

export default HomeStyles;