import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import { navigateToUrl } from './actions';
import UrlBar from './UrlBar/UrlBar';
import GuestInstanceHandler from '../GuestInstance/GuestInstanceHandler';
import WorkspaceHandler from '../Workspace/WorkspaceHandler';

import {
  UserNavigationContainer,
  PageNavigationContainer,
} from './styles';


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
    const { navigateToUrl } = this.props;
    return (
      <UserNavigationContainer>
        <PageNavigationContainer/>
        <WorkspaceHandler/>
        <UrlBar navigateToUrl={navigateToUrl}/>

      </UserNavigationContainer>
    );
  }

}

const workspacesSelector = createSelector(
  state => state.workspaces,
  workspaces => workspaces
);


const mapStateToProps = createSelector(
  workspacesSelector,
  workspaces => ({
    workspaces
  })
);

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    navigateToUrl: navigateToUrl,
  }, dispatch);
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, {
    searchQuery: stateProps.searchQuery,
    navigateToUrl: arg => dispatchProps.navigateToUrl(arg)
  });
};

export default connect(mapStateToProps, mapActionsToProps, mergeProps)(NavigationHandler);
