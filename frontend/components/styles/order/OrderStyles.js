import styled from 'styled-components';

const OrderStyles = styled.div`
  max-width: 1000px;
  margin: 1rem auto 0 auto;
  border: 1px solid ${props => props.theme.lightgrey};
  box-shadow: ${props => props.theme.darkgrey};
  padding: 2rem;
  border-top: 10px solid #5e42a6;
  & > p {
    display: grid;
    grid-template-columns: 1fr 5fr;
    margin: 0;
    border-bottom: 1px solid ${props => props.theme.lightgrey};
    span {
      padding: 1rem;
      &:first-child {
        font-weight: 900;
        text-align: right;
      }
    }
  }
  .order-item {
    border-bottom: 1px solid ${props => props.theme.lightgrey};
    display: grid;
    grid-template-columns: 300px 1fr;
    align-items: center;
    grid-gap: 2rem;
    margin: 2rem 0;
    padding-bottom: 2rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
export default OrderStyles;
