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
      searchValue: this.props.currentURL,
      data: false,
      currentTab: this.props.activeTab
    };

  }

  componentWillUpdate({ activeTab, currentURL }) {
    if (activeTab === this.state.currentTab) return;
    this.setState({
      currentTab: activeTab,
      searchValue: currentURL
    });
  }

  parseURL =  url => {
    if (!/^https?:\/\//i.test(url)) {
      const parsedUrl = 'https://' + url;

      this.props.navigateToUrl(parsedUrl);
      this.setState({
        searchValue: this.props.currentURL
      });
    }
    else {
      this.props.navigateToUrl(url);
      this.setState({
        searchValue: this.props.currentURL
      });
    }
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
        clicked={toggleUrlBarFocus}
        onFocus={handleToggleUrlBarFocus}
        onBlur={handleToggleUrlBarFocus}
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
