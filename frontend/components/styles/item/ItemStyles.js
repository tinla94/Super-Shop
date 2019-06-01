import styled from 'styled-components';

const Item = styled.div`
  border: 1px solid ${props => props.theme.darkgrey};
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);
  background: lightgray;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: all .2s;
  margin-bottom: 1rem;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-bottom: 4px solid ${props => props.theme.darkgrey}
  }

  &:hover {
    transform: translateY(-.6rem);
  }

  p {
    font-size: 1.5rem;
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }

  .buttonList {
    width: 100%;
    margin: .6rem 0 .5rem 0;

    span {
      margin: 1rem 3rem;
      font-size: 2rem;
      cursor: pointer;

      &:nth-child(1) {
        color: ${props => props.theme.purpleOne}
      }

      &:nth-child(2) {
        color: ${props => props.theme.purpleTwo}
      }

      &:nth-child(3) {
        color: ${props => props.theme.purpleThree}
      }

      &:hover {
        color: ${props => props.theme.lightgrey};
      }
    }
  }
`;

export default Item;
