import React, { Component } from 'react';
import UrlBar from './urlbar';

const KeyCodes = require('../common/keyCodes');


class NavHandler extends Component {

  constructor (props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  state = {
    searchValue: '',
  };

  onKeyDown = (e) => {
    let location = this.state.searchValue;
    switch (e.keyCode) {
    case KeyCodes.SHIFT:
      break;
    case KeyCodes.ENTER:
      e.preventDefault();
      this.setState({searchValue: location});
      console.log(`www.${location}.com`);
    }
  }

  searchQuery = async (query) => {
    await this.setState({searchValue: query});
  };

  render() {
    return (
      <div>
        <UrlBar onKeyDown={this.onKeyDown} handleSearch={this.searchQuery} query={this.state.searchValue}/>
        <button onKeyDown={this.onKeyDown}>GO</button>
      </div>
    );
  }
}

export default NavHandler;
