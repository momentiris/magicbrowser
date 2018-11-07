import React, { Component, Fragment } from 'react';
import { Hover } from './styles.js';

class WsHover extends Component {
  state = {
    hover: false,
  }

  handleClick = () => {
    this.setState({hover: !this.state.hover});
  }

  render() {
    return (
      <Fragment>
        <Hover isHover={this.state.hover}></Hover>
      </Fragment>
    );
  }
}

export default WsHover;
