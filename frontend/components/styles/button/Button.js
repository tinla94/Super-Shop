import styled from 'styled-components';


const FormButton = styled.button`
    padding: 1.5rem 2.5rem;
    margin: 2rem 0 1rem 0;
    font-size: 1.5rem;
    letter-spacing: .3rem;
    color: white;
    border: none;
    box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    transition: all .3s;
    background-image: linear-gradient(to right, #493382 0%, #5052b5 50%, #493382 100%);

    &:hover {
        transform: translateY(-2px) scale(1.1);
    }

    &:active,
    &:focus {
        box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.4);
    }
`;

const MainButton = styled.button`
    padding: 1.5rem 2.5rem;
    margin: 2rem 0 1rem 0;
    font-size: 1.5rem;
    letter-spacing: .3rem;
    color: white;
    border: none;
    box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    transition: all .3s;
    background-color: ${props => props.theme.mainColor};

    &:hover {
        transform: translateY(-2px) scale(1.1);
    }

    &:active,
    &:focus {
        box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.4);
        border: none;
    }
`;

const CheckoutButton = styled.button`
padding: 1.5rem 2.5rem;
margin: 2rem 0 1rem 0;
font-size: 2rem;
letter-spacing: .3rem;
color: white;
border: none;
box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.4);
cursor: pointer;
transition: all .3s;
background-image: linear-gradient(to right, #3e4094 0%, #5052b5 50%, #3e4094 100%);;

&:hover {
    transform: translateY(-2px) scale(1.1);
}

&:active,
&:focus {
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.4);
    border: none;
}
`;

export { FormButton, MainButton, CheckoutButton };