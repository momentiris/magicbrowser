import React, { Component } from 'react';
import UrlBarSuggestions from './urlBarSuggestions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import {
  UrlBarInput,
} from './styles';

import KeyCodes from '../../../common/keyCodes';

class UrlBar extends Component {
  constructor (props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      searchValue: false,
      data: false,
      defaultValue: this.props.currentURL
    };

  }

  parseURL = url => {
    if (!/^https?:\/\//i.test(url)) {
      const parsedUrl = 'http://' + url;
      console.log(parsedUrl);

      this.props.navigateToUrl(parsedUrl);
    } else {

      this.props.navigateToUrl(url);
    }

    this.setState({
      searchValue: this.props.currentURL
    });
  }

  onKeyDown = (e) => {
    const location = this.state.searchValue;
    switch (e.keyCode) {
      case KeyCodes.SHIFT:
        break;
      case KeyCodes.ENTER:
        e.preventDefault();
        this.parseURL(this.state.searchValue);
        // this.setState({data: !this.state.data});
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
    const {
      userNavigation,
      handleToggleUrlBarFocus,
      currentURL
    } = this.props;

    const { toggleUrlBarFocus } = userNavigation;

    const { searchValue, defaultValue } = this.state;

    return (
      <UrlBarInput
        clicked={toggleUrlBarFocus}
        onFocus={handleToggleUrlBarFocus}
        onBlur={handleToggleUrlBarFocus}
        disable={userNavigation.toggleWorkspaces}
        dashboardOpen={userNavigation.dashboardOpen}
        value={currentURL}
        onClick={this.onClick}
        onKeyDown={this.onKeyDown}
        onChange={this.handleChange}
      />
    );
  }
}



export default UrlBar;
