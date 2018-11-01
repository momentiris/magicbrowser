import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import TabContainer from './TabContainer';
import { addOneTab, removeSelectedTab } from '../Workspace/actions';

// Common
const KeyCodes = require('../common/keyCodes');

class TabHandler extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.props);
  }

  addOneTab = (e) => {
    this.props.addOneTab({src: ''});
  }

  removeSelectedTab = id => {
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
    removeSelectedTab: removeSelectedTab
  }, dispatch);
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, {
    // ok wtf??
    tabs: stateProps.workspaces[stateProps.workspaces.current].tabs,
    addOneTab: arg => dispatchProps.addOneTab(arg),
    removeSelectedTab: arg => dispatchProps.removeSelectedTab(arg)
  });
};

export default connect(mapStateToProps, mapActionsToProps, mergeProps)(TabHandler);
