import styled from 'styled-components';

const OrderItemStyles = styled.li`
  box-shadow: ${props => props.theme.lightgrey};
  list-style: none;
  padding: 2rem;
  border: 1px solid ${props => props.theme.lightgrey};
  margin: 1rem 5rem;
  border-radius: .4rem;


  &:nth-child(odd):hover,
  &:nth-child(even):hover{
    background: ${props => props.theme.pink};
  }

  &:nth-child(odd) {
    background: ${props => props.theme.purpleOne};
  }

  &:nth-child(even) {
    background: ${props => props.theme.purpleThree};
  }
  
  h2 {
    font-size: 4rem;
    margin-left: 5rem;
  }

  p {
    color: white;
  }

  .images {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    margin-top: 1rem;
    img {
      height: 200px;
      object-fit: cover;
      width: 100%;
    }
  }
  .order-meta {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
    display: grid;
    grid-gap: 1rem;
    text-align: center;
    & > * {
      margin: 0;
      background: rgba(0, 0, 0, 0.3);
      padding: 1rem 0;
    }
    strong {
      display: block;
      margin-bottom: 1rem;
    }
  }
`;

export default OrderItemStyles;
