import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import TabContainer from './TabContainer';


import { addOneTab } from './actions';

class TabHandler2 extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  addOneTab = () => {
    console.log('add tab please');
    this.props.addOneTab(1);
  }

  removeSelectedTab = id => {
    this.props.removeSelectedTab(id);
  }

  render() {
    const { tabs } = this.props;
    return (
      <Fragment>
        <TabContainer tabs={tabs}></TabContainer>
        <button onClick={this.addOneTab}>Add one tab</button>

      </Fragment>
    );
  }

}

const tabsSelector = createSelector(
  state => state.tabs,
  tabs => tabs
);


const mapStateToProps = createSelector(
  tabsSelector,
  tabs => ({
    tabs
  })
);

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    addOneTab: addOneTab,
  }, dispatch);
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, {
    tabs: stateProps.tabs,
    addOneTab: arg => dispatchProps.addOneTab(arg)
  });
};

export default connect(mapStateToProps, mapActionsToProps, mergeProps)(TabHandler2);
