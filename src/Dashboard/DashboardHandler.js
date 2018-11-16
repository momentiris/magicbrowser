import React, { Component } from 'react';
import Dashboard from './Dashboard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import {
  addWorkspace,
  switchWorkspaces,
  initEmptyWorkspace,
  addOneTab,
  removeSelectedTab,
  handleDragDashBoardTab,
  renameWorkspace,
  handleOpenDashBoard
} from '../Workspace/actions';

class DashboardHandler extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      workspaces,
      workspace,
      current,
      active,
      tabs,
      workspacestemp,
      switchWorkspace,
      addWorkspace,
      renameWorkspace,
      addOneTab,
      removeSelectedTab,
      handleDragDashBoardTab,
      handleOpenDashBoard
    } = this.props;

    return (

      <Dashboard
        workspaces={workspaces}
        workspace={workspace}
        current={current}
        active={active}
        tabs={tabs}
        workspacestemp={workspacestemp}
        switchWorkspace={switchWorkspace}
        addWorkspace={addWorkspace}
        renameWorkspace={renameWorkspace}
        addOneTab={addOneTab}
        removeSelectedTab={removeSelectedTab}
        handleDragDashBoardTab={handleDragDashBoardTab}
        handleOpenDashBoard={handleOpenDashBoard}
      />
    );
  }

}

const workspaceSelector = createSelector(
  state => state.workspaces,
  workspaces => workspaces,
);

const mapStateToProps = createSelector(
  workspaceSelector,
  workspaces => ({
    workspaces
  }),
);

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    switchWorkspaces: switchWorkspaces,
    addWorkspace: addWorkspace,
    addOneTab: addOneTab,
    renameWorkspace: renameWorkspace,
    removeSelectedTab: removeSelectedTab,
    handleDragDashBoardTab: handleDragDashBoardTab,
    handleOpenDashBoard: handleOpenDashBoard
  }, dispatch);
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const removeCurrent = (obj, prop) => {
    let {[prop]: omit, ...res} = obj;
    return res;
  };

  const withoutCurrent = Object.entries(removeCurrent(stateProps.workspaces, 'current'));
  const { current, ...withoutCurrentObj} = stateProps.workspaces;
  return Object.assign({}, ownProps, {
    current: stateProps.workspaces.current,
    tabs: stateProps.workspaces[stateProps.workspaces.current].tabs,
    active: stateProps.workspaces[stateProps.workspaces.current].active,
    workspace: [stateProps.workspaces[stateProps.workspaces.current]],
    workspaces: withoutCurrent,
    workspacestemp: withoutCurrentObj,
    switchWorkspaces: arg => dispatchProps.switchWorkspaces(arg),
    addWorkspace: arg => dispatchProps.addWorkspace(arg),
    renameWorkspace: arg => dispatchProps.renameWorkspace(arg),
    addOneTab: arg => dispatchProps.addOneTab(arg),
    removeSelectedTab: arg => dispatchProps.removeSelectedTab(arg),
    handleDragDashBoardTab: arg => dispatchProps.handleDragDashBoardTab(arg),
    handleOpenDashBoard: arg => dispatchProps.handleOpenDashBoard(arg)
  });
};

export default connect(mapStateToProps, mapActionsToProps, mergeProps)(DashboardHandler);