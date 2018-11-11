import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import {
  navigateToUrl,
  handleToggleUrlBarFocus
} from './actions';
import UrlBar from './Components/UrlBar/UrlBar';
import GuestInstanceHandler from '../GuestInstance/GuestInstanceHandler';
import WorkspaceHandler from '../Workspace/WorkspaceHandler';
import UserNavigationContainer from './Components/UserNavigationContainer/UserNavigationContainer';


// todo:
// 1. target current webview
// change url
// change src of tab object
// navigate backward/forward
// update
class NavigationHandler extends Component {

  constructor(props) {
    super(props);

  }
  componentDidMount() {
  }

  navigateForwards = webview => {

  };

  navigateBackwards = webview => {

  };

  navigateToUrl = url => {

  };

  updateWebview = webview => {

  };
  render() {
    const {
      navigateToUrl,
      userNavigation,
      handleToggleUrlBarFocus
    } = this.props;

    return (
      <UserNavigationContainer
        navigateToUrl={navigateToUrl}
        userNavigation={userNavigation}
        handleToggleUrlBarFocus={handleToggleUrlBarFocus}
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
    handleToggleUrlBarFocus: handleToggleUrlBarFocus
  }, dispatch);
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, {
    searchQuery: stateProps.searchQuery,
    userNavigation: stateProps.userNavigation,
    navigateToUrl: arg => dispatchProps.navigateToUrl(arg),
    handleToggleUrlBarFocus: dispatchProps.handleToggleUrlBarFocus
  });
};

export default connect(mapStateToProps, mapActionsToProps, mergeProps)(NavigationHandler);
