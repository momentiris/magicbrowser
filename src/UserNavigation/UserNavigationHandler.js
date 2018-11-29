import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import {
  navigateToUrl,
  handleToggleUrlBarFocus,
  handleDashboardOpenUI,
  toggleSavedLinksOpen
} from './actions';
import {
  handleOpenDashBoard,
  handleUpdateCurrentTabQuery,
  handleAddToSavedLinks,
} from '../Workspace/actions';
import UrlBar from './Components/UrlBar/UrlBar';
import GuestInstanceHandler from '../GuestInstance/GuestInstanceHandler';
import WorkspaceHandler from '../Workspace/WorkspaceHandler';
import UserNavigationContainer from './Components/UserNavigationContainer/UserNavigationContainer';

class NavigationHandler extends Component {

  constructor(props) {
    super(props);
  }

  handleOpenDashBoard = (e) => {
    e.preventDefault();
    this.props.handleOpenDashBoard({
      id: this.props.currentWorkspace
    });

    this.props.handleDashboardOpenUI({hide: true});
  }

  render() {
    const {
      navigateToUrl,
      userNavigation,
      handleToggleUrlBarFocus,
      currentWorkspace,
      currentURL,
      handleUpdateCurrentTabQuery,
      activeTab,
      toggleSavedLinksOpen,
      handleAddToSavedLinks,
      currentTitle
    } = this.props;

    return (
      <UserNavigationContainer
        
        handleAddToSavedLinks={handleAddToSavedLinks}
        handleUpdateCurrentTabQuery={handleUpdateCurrentTabQuery}
        currentWorkspace={currentWorkspace}
        handleOpenDashBoard={this.handleOpenDashBoard}
        navigateToUrl={navigateToUrl}
        userNavigation={userNavigation}
        handleToggleUrlBarFocus={handleToggleUrlBarFocus}
        currentURL={currentURL}
        currentTitle={currentTitle}
        activeTab={activeTab}
        toggleSavedLinksOpen={toggleSavedLinksOpen}
      />
    );
  }
}

const workspacesSelector = createSelector(
  state => state.workspaces,
  workspaces => workspaces
);

const userNavigationSelector = createSelector(
  state => state.userNavigation,
  userNavigation => userNavigation
);


const mapStateToProps = createSelector(
  workspacesSelector,
  userNavigationSelector,
  (workspaces, userNavigation) => ({
    workspaces,
    userNavigation
  })
);

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    navigateToUrl: navigateToUrl,
    handleToggleUrlBarFocus: handleToggleUrlBarFocus,
    handleOpenDashBoard: handleOpenDashBoard,
    handleDashboardOpenUI: handleDashboardOpenUI,
    handleUpdateCurrentTabQuery: handleUpdateCurrentTabQuery,
    toggleSavedLinksOpen: toggleSavedLinksOpen,
    handleAddToSavedLinks: handleAddToSavedLinks
  }, dispatch);
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, {
    activeTab: stateProps.workspaces[stateProps.workspaces.current].active,
    tabs: stateProps.workspaces[stateProps.workspaces.current].tabs,
    searchQuery: stateProps.searchQuery,
    userNavigation: stateProps.userNavigation,
    navigateToUrl: arg => dispatchProps.navigateToUrl(arg),
    handleToggleUrlBarFocus: dispatchProps.handleToggleUrlBarFocus,
    handleOpenDashBoard: dispatchProps.handleOpenDashBoard,
    currentWorkspace: stateProps.workspaces.current,
    handleDashboardOpenUI: dispatchProps.handleDashboardOpenUI,
    handleAddToSavedLinks: arg => dispatchProps.handleAddToSavedLinks(arg),
    handleUpdateCurrentTabQuery: arg => dispatchProps.handleUpdateCurrentTabQuery(arg),
    toggleSavedLinksOpen: dispatchProps.toggleSavedLinksOpen,
    currentURL: stateProps.workspaces[stateProps.workspaces.current]
      .tabs[stateProps.workspaces[stateProps.workspaces.current].active].src,
    currentTitle: stateProps.workspaces[stateProps.workspaces.current]
      .tabs[stateProps.workspaces[stateProps.workspaces.current].active].title
  });
};

export default connect(mapStateToProps, mapActionsToProps, mergeProps)(NavigationHandler);
