import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import TabContainer from './TabContainer';
import {
  addOneTab,
  removeSelectedTab,
  setTabActive,
  handleDragDashBoardTab,
  moveTabToWorkspace,
} from '../Workspace/actions';
import { handleDashboardOpenUI } from '../UserNavigation/actions';
import { contextMenuSetData, setContextMenuWorkspaces } from '../common/contextmenu';

const electron = window.electron;
const { ipcRenderer } = electron;

class TabHandler extends Component {
  componentDidMount() {
    console.log(this.props);
    this.handleMsgFromMain();
  }

  handleMsgFromMain = () => {
    ipcRenderer.on('moveTabs', (event, data) => {
      this.props.moveTabToWorkspace(data);
    });
  }

  addOneTab = (e) => {
    this.props.addOneTab({
      ws: false
    });
  }

  removeSelectedTab = id => {
    this.props.removeSelectedTab(id);
    const dashboardTabIndex = this.props.tabs.findIndex(tab => tab.src === 'dashboard');
    dashboardTabIndex === id && this.props.handleDashboardOpenUI({hide: false});
  }

  setActive = id => {

    const dashboardTabIndex = this.props.tabs.findIndex(tab => tab.src === 'dashboard');
    this.props.handleDashboardOpenUI({hide: dashboardTabIndex !== id ? false : true });
    this.props.setTabActive(id);
  }

  handleDragDashBoardTab = tabs => {
    this.props.handleDragDashBoardTab(tabs);
  }

  registerContextMenuEvents = elem => {
    elem.addEventListener('contextmenu', () => contextMenuSetData(elem, this.props.currentWorkspace));
  }

  render() {
    const { tabs, active } = this.props;
    return (
      <Fragment>
        <TabContainer
          active={active}
          setActive={this.setActive}
          tabs={tabs}
          removeSelectedTab={this.removeSelectedTab}
          addOneTab={this.addOneTab}
          handleDragDashBoardTab={this.handleDragDashBoardTab}
          registerContextMenuEvents={this.registerContextMenuEvents}
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
    handleDragDashBoardTab: handleDragDashBoardTab,
    handleDashboardOpenUI: handleDashboardOpenUI,
    moveTabToWorkspace: moveTabToWorkspace,
  }, dispatch);
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, {
    tabs: stateProps.workspaces[stateProps.workspaces.current].tabs,
    active: stateProps.workspaces[stateProps.workspaces.current].active,
    addOneTab: arg => dispatchProps.addOneTab(arg),
    removeSelectedTab: arg => dispatchProps.removeSelectedTab(arg),
    setTabActive: arg => dispatchProps.setTabActive(arg),
    handleDragDashBoardTab: arg => dispatchProps.handleDragDashBoardTab(arg),
    handleDashboardOpenUI: arg => dispatchProps.handleDashboardOpenUI(arg),
    currentWorkspace: stateProps.workspaces.current,
    moveTabToWorkspace: arg => dispatchProps.moveTabToWorkspace(arg),
  });
};

export default connect(mapStateToProps, mapActionsToProps, mergeProps)(TabHandler);
