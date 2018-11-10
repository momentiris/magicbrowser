import React, { Component } from 'react';
import UrlBar from '../UrlBar/UrlBar';
import WorkspaceHandler from '../../../Workspace/WorkspaceHandler';
import {
  Container,
  PageNavigationContainer
} from './styles';

class UserNavigationContainer extends Component {

  render() {
    const {
      userNavigation,
      navigateToUrl
    } = this.props;

    return (
      <Container>
        <PageNavigationContainer/>
        <WorkspaceHandler/>
        <UrlBar
          userNavigation={userNavigation}
          navigateToUrl={navigateToUrl}
        />
      </Container>
    );
  }

}

export default UserNavigationContainer;
