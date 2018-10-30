import React, { Component } from 'react';
import UrlBarSuggestions from './urlBarSuggestions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import { addSearchQuery } from './actions';

const KeyCodes = require('../common/keyCodes');

class NavHandler extends Component {
  constructor (props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    searchValue: ''
  }

  onKeyDown = (e) => {
    const location = this.state.searchValue;
    switch (e.keyCode) {
    case KeyCodes.SHIFT:
      break;
    case KeyCodes.ENTER:
      e.preventDefault();
      this.props.addSearchQuery(location);
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
        <UrlBarSuggestions />
      </div>
    );
  }
}


const searchQuerySelector = createSelector(
  state => state.searchQuery,
  searchQuery => searchQuery
);


const mapStateToProps = createSelector(
  searchQuerySelector,
  searchQuery => ({
    searchQuery
  })
);

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    addSearchQuery: addSearchQuery,
  }, dispatch);
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, {
    searchQuery: stateProps.searchQuery,
    addSearchQuery: arg => dispatchProps.addSearchQuery(arg)
  });
};

export default connect(mapStateToProps, mapActionsToProps, mergeProps)(NavHandler);
