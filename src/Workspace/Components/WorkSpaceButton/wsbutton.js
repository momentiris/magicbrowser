import React, { Component, Fragment } from 'react';
import { Button } from './styles';

class WsButton extends Component {
  state = {
    clicked: false,
  }

  handleClick = () => {
    this.setState({clicked: !this.state.clicked});
  }

  render() {
    return (
      <div>
        <WsButton isClicked={this.state.clicked}></WsButton>
      </div>
    );
  }
}

export default WsButton;
