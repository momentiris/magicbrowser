import React, { Component } from 'react';
import UrlBar from '../UrlBar/UrlBar';
import WorkspaceHandler from '../../../Workspace/WorkspaceHandler';
import {
  AddTabIcon,
  ReadingListIcon,
  NavSettingsIcon,
  DashboardIcon
} from '../../../common/assets/icons.js';
import {
  Container,
  PageNavigationContainer,
  UrlBarContainer,
  AddToReadingListButton,
  ReadingListButton,
  NavSettingsButton,
  GoToDashboardButton,
  ReadListNavSettingsWrap
} from './styles';


class UserNavigationContainer extends Component {

  render() {
    const {
      userNavigation,
      navigateToUrl
    } = this.props;

    const { toggleWorkspaces } = userNavigation;

    return (
      <Container>
        <PageNavigationContainer/>
        <WorkspaceHandler/>
        <UrlBarContainer
          show={toggleWorkspaces}
        >
          <UrlBar
            userNavigation={userNavigation}
            navigateToUrl={navigateToUrl}
          />
          <AddToReadingListButton>
            <AddTabIcon/>
          </AddToReadingListButton>
        </UrlBarContainer>

        <GoToDashboardButton toggle={toggleWorkspaces ? 'true' : 'false' } to="/dashboard">
          <DashboardIcon />
          <span>Dashboard</span>
        </GoToDashboardButton>
        <ReadListNavSettingsWrap>
          <ReadingListButton>
            <ReadingListIcon />
          </ReadingListButton>
          <NavSettingsButton>
            <NavSettingsIcon />
          </NavSettingsButton>
        </ReadListNavSettingsWrap>

      </Container>
    );
  }

}

export default UserNavigationContainer;
