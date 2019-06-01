import styled from 'styled-components';

const Title = styled.h3`
  text-align: center;
  margin-top: -5.4rem;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.3)
  );
  font-size: 1.5rem;

  a {
    background: ${props => props.theme.red};
    display: inline;
    font-size: 1.5rem;
    text-align: center;
    color: white;
  }

  p {
    margin-top: -1rem;
    color: ${props => props.theme.white}
  }
`;

export default Title;
