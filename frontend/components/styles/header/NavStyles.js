import styled from 'styled-components';

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 2rem;
  background: ${props => props.theme.mainColor};

  a,
  button {
    color: ${props => props.theme.lightgrey};
    padding: 1rem 3rem;
    letter-spacing: .2rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1.3rem;
    background: none;
    border: 0;
    cursor: pointer;
    font-weight: 800;
    @media (max-width: 700px) {
      font-size: 1.2rem;
      padding: 1rem;
    }
    &:before {
      content: '';
      width: 2px;
      background: ${props => props.theme.lightgrey};
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(-20deg);
      top: 0;
      bottom: 0;
    }
    &:after {
      height: 2px;
      background: ${props => props.theme.lightgrey};
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus,
    &:active {
      color: #fff;
    }
  }
  @media (max-width: 1300px) {
    border-top: 1px solid ${props => props.theme.mainColor};
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`;

export default NavStyles;
