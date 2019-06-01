import styled from 'styled-components';

const CloseButton = styled.button`
  background: ${props => props.theme.purpleOne};
  color: white;
  font-size: 3rem;
  border: 0;
  position: absolute;
  padding: 0 1rem;
  z-index: 2;
  right: 0;
  top: 0;
  cursor: pointer;

  &:hover {
    background: #fff;
    color: ${props => props.theme.purpleOne};
  }
`;

export default CloseButton;
