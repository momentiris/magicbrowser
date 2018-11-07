import React, { Component, Fragment } from 'react';
import { Button } from './styles';

class WsButton extends Component {
  state = {
    clicked: false,
  }

  componentDidMount(){
    console.log(this.props);
  }

  handleClick = () => {
    this.setState({clicked: !this.state.clicked});
  }

  render() {
    return (
      <Fragment>
        <Button> {this.props.ok}</Button>
      </Fragment>
    );
  }
}

export default WsButton;
