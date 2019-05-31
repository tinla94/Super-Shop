import React, { Component } from 'react';
import Meta from './Meta';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';


const theme = {
  mainColor: '#312450',
  subColor: '#5e42a6',
  pink: '#b74e91',
  black: '#000',
  white: '#fff',
  darkgrey: '#666',
  lightgrey: '#676d79',
  purpleOne: '#493382',
  purpleTwo: '#5052b5',
  purpleThree: '#3e4094',
  maxWidth: '100%',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.darkgrey};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

injectGlobal`
  @font-face {
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-size: 10px;
  }
  *, *:before, *:after {
    margin: 0;
    padding: 0;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
  a {
    text-decoration: none;
  }
  button {   }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;