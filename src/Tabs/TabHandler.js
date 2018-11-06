import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import TabContainer from './TabContainer';
import {
  addOneTab,
  removeSelectedTab,
  setTabActive,
} from '../Workspace/actions';

// // Common
// const KeyCodes = require('../common/keyCodes');

class TabHandler extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  addOneTab = (e) => {
    this.props.addOneTab({src: 'http://facebook.com'});
  }

  removeSelectedTab = id => {
    this.props.removeSelectedTab(id);
  }

  setActive = tab => {

    this.props.setTabActive(tab);
  }

  render() {
    const { tabs, active } = this.props;
    return (
      <Fragment>
        <TabContainer active={active} setActive={this.setActive}
          tabs={tabs}
          removeSelectedTab={this.removeSelectedTab}
          addOneTab={this.addOneTab}
        />
      </Fragment>
    );
  }
}

const tabsSelector = createSelector(
  state => state.workspaces,
  workspaces => workspaces
);

const mapStateToProps = createSelector(
  tabsSelector,
  workspaces => ({
    workspaces
  })
);

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    addOneTab: addOneTab,
    removeSelectedTab: removeSelectedTab,
    setTabActive: setTabActive,
  }, dispatch);
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, {
    // ok wtf??
    tabs: stateProps.workspaces[stateProps.workspaces.current].tabs,
    active: stateProps.workspaces[stateProps.workspaces.current].active,
    addOneTab: arg => dispatchProps.addOneTab(arg),
    removeSelectedTab: arg => dispatchProps.removeSelectedTab(arg),
    setTabActive: arg => dispatchProps.setTabActive(arg),

  });
};

export default connect(mapStateToProps, mapActionsToProps, mergeProps)(TabHandler);
