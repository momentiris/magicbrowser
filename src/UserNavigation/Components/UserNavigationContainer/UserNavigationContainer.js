import React, { Component } from 'react';
import UrlBar from '../UrlBar/UrlBar';
import WorkspaceHandler from '../../../Workspace/WorkspaceHandler';
import PageNavigationContainer from '../PageNavigation/PageNavigationContainer';
import {
  AddTabIcon,
  ReadingListIcon,
  NavSettingsIcon,
  DashboardIcon,
  ToDashboardIcon,
  UpdateTabIcon,
  TabNavigationArrowIcon
} from '../../../common/assets/icons.js';
import {
  Container,
  UrlBarContainer,
  AddToReadingListButton,
  ReadingListButton,
  NavSettingsButton,
  GoToDashboardButton,
  ReadListNavSettingsWrap,
  GoToDashboardButtonWrap
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
        <GoToDashboardButtonWrap toggle={toggleWorkspaces ? 'true' : 'false' }>
          <ToDashboardIcon/>
          <GoToDashboardButton  to="/dashboard">
            <DashboardIcon />
            <span>Dashboard</span>
          </GoToDashboardButton>
        </GoToDashboardButtonWrap>
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
