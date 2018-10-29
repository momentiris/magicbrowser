import React, { Component } from 'react';

const KeyCodes = require('../common/keyCodes');

class NavHandler extends Component {
  constructor (props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    searchValue: '',
  };

  onKeyDown = (e) => {
    const location = this.state.searchValue;
    switch (e.keyCode) {
    case KeyCodes.SHIFT:
      break;
    case KeyCodes.ENTER:
      e.preventDefault();
      this.setState({searchValue: location});
      console.log(`www.${location}.com`);
    }
  }

  handleChange = (e) => {
    this.setState({searchValue: e.target.value});
    console.log(e.target.value);
  };

  render() {
    return (
      <div>
        <input
          onKeyDown={this.onKeyDown}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default NavHandler;
