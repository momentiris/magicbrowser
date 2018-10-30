import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';

class UrlBarSuggestions extends Component {

  constructor(props) {
    super(props);
    console.log(this.props);
  }

  generateAllItems = () => {
    const items = this.props.searchQuery;
    const addToItems = (items) => {
      if (items.length > 0) {
        items.push(<li>
          {items}
        </li>);
      }
    };
    return items;
  }

  render() {
    const items = this.props.searchQuery;

    return (
      <div>
        <ul>
          {
            this.generateAllItems()
          }
        </ul>
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


const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, {
    searchQuery: stateProps.searchQuery,
  });
};

export default connect(mapStateToProps, null, mergeProps)(UrlBarSuggestions);
