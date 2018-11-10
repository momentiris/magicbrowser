import React, { Component } from 'react';
import UrlBarSuggestions from './urlBarSuggestions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import {
  UrlBarInput
} from './styles';

import KeyCodes from '../../../common/keyCodes';

class UrlBar extends Component {
  constructor (props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  state = {
    searchValue: '',
    data: false,
  }

  //Change location name, remove https from visible bar
  //const hasTitle = location !== location.replace(/^https?:\/\//, '');

  onKeyDown = (e) => {
    const location = this.state.searchValue;
    switch (e.keyCode) {
      case KeyCodes.SHIFT:
        break;
      case KeyCodes.ENTER:
        e.preventDefault();
        this.props.navigateToUrl(`http://www.${location}.com`);

        this.setState({data: !this.state.data});
    }
  }

  // TODO: remove local state and apply redux state on the suggestionBar
  onClick = () => {
    this.setState({data: !this.state.data });
  }

  handleChange = (e) => {
    this.setState({searchValue: e.target.value});
  }

  render() {
    const { toggleWorkspaces } = this.props.userNavigation;

    return (
      <UrlBarInput
        show={toggleWorkspaces}
        onClick={this.onClick}
        onKeyDown={this.onKeyDown}
        onChange={this.handleChange}
      >


      </UrlBarInput>
    );
  }
}



export default UrlBar;
