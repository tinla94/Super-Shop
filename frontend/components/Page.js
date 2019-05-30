import React, { Component } from 'react';
import Meta from './Meta';


class Page extends Component {
  render() {
    return (
      <>
        <Meta />
        {this.props.children}
      </>
    );
  }
}

export default Page;