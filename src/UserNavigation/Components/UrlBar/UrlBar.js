import React, { Component } from 'react';
import UrlBarSuggestions from './urlBarSuggestions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import {
  UrlBarInput,
} from './styles';
import { parser } from './parser';

import KeyCodes from '../../../common/keyCodes';

class UrlBar extends Component {
  constructor (props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      isFocused: true,
      searchValue: this.props.currentURL,
      data: false,
      currentTab: this.props.activeTab
    };
    this.input = React.createRef();

  }

  componentWillUpdate({ activeTab, currentURL }) {
    if (activeTab === this.state.currentTab) {
      if (this.state.searchValue !== currentURL && !this.state.isFocused) {
        this.setState({
          searchValue: currentURL
        });
      }
      return;
    }

    if (activeTab !== this.state.currentTab) {
      this.setState({
        currentTab: activeTab,
        searchValue: currentURL
      });
    };
    return;
  }

  parseURL = query => {
    const parsed = parser(query);
    this.props.navigateToUrl(parsed);
  }

  onKeyDown = (e) => {
    const location = this.state.searchValue;
    switch (e.keyCode) {
      case KeyCodes.SHIFT:
        break;
      case KeyCodes.ENTER:
        e.preventDefault();
        this.parseURL(this.state.searchValue);
        this.input.current.blur();
        this.setState({isFocused: false});
      default:
        break;
    }
  }

  // TODO: remove local state and apply redux state on the suggestionBar
  onClick = () => {
    this.setState({data: !this.state.data });
  }

  handleChange = (e) => {
    this.props.handleUpdateCurrentTabQuery(e.target.value);
    this.setState({
      searchValue: e.target.value,
      defaultValue: this.props.currentURL
    });
  }

  handleFocus = () => {
    this.setState({
      isFocused: true,
    });
    console.log('focused');
    this.props.handleToggleUrlBarFocus();
  }

  handleBlur = () => {
    this.setState({
      isFocused: false,
    });
    console.log('blurred');
    this.props.handleToggleUrlBarFocus();
  }

  render() {
    const {
      userNavigation,
      handleToggleUrlBarFocus,
      currentURL,
    } = this.props;

    const { toggleUrlBarFocus } = userNavigation;

    const { searchValue, defaultValue } = this.state;

    return (
      <UrlBarInput

        ref={this.input}
        clicked={toggleUrlBarFocus}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        disable={userNavigation.toggleWorkspaces}
        dashboardOpen={userNavigation.dashboardOpen}
        value={searchValue}
        onClick={this.onClick}
        onKeyDown={this.onKeyDown}
        onChange={this.handleChange}
      />
    );
  }
}



export default UrlBar;
