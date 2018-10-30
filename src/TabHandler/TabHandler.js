import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import TabContainer from './TabContainer';

import { addOneTab, removeSelectedTab } from './actions';

class TabHandler extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {


  }

  addOneTab = () => {
    console.log('add tab please');
    this.props.addOneTab(1);
  }

  removeSelectedTab = id => {
    console.log('remove tab please' + id);
    this.props.removeSelectedTab(id);
  }

  render() {
    const { tabs } = this.props;
    return (
      <Fragment>
        <TabContainer
          tabs={tabs}
          removeSelectedTab={this.removeSelectedTab}
          addOneTab={this.addOneTab}
        />

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
    removeSelectedTab: removeSelectedTab
  }, dispatch);
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, {
    tabs: stateProps.tabs,
    addOneTab: arg => dispatchProps.addOneTab(arg),
    removeSelectedTab: arg => dispatchProps.removeSelectedTab(arg)
  });
};

export default connect(mapStateToProps, mapActionsToProps, mergeProps)(TabHandler);
