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
} from '../../../common/assets/icons.js';

import {
  Container,
  UrlBarContainer,
  AddToReadingListButton,
  ReadingListButton,
  NavSettingsButton,
  GoToDashboardButton,
  ReadListNavSettingsWrap,
  GoToDashboardButtonWrap,
  PreToDashBoardButton
} from './styles';

class UserNavigationContainer extends Component {

  render() {
    const {
      userNavigation,
      navigateToUrl,
      handleToggleUrlBarFocus,
      handleOpenDashBoard,
      currentWorkspace,
      currentURL,
      handleUpdateCurrentTabQuery,
      activeTab,
      toggleSavedLinksOpen
    } = this.props;

    const {
      toggleWorkspaces,
      toggleUrlBarFocus,
      dashboardOpen,
      savedLinksOpen
    } = userNavigation;

    return (
      <Container>
        <PageNavigationContainer/>
        <WorkspaceHandler/>
        <UrlBarContainer
          clicked={toggleUrlBarFocus}
          show={toggleWorkspaces}
          dashboardOpen={dashboardOpen}
        >
          <UrlBar
            activeTab={activeTab}
            handleUpdateCurrentTabQuery={handleUpdateCurrentTabQuery}
            currentURL={currentURL}
            userNavigation={userNavigation}
            navigateToUrl={navigateToUrl}
            handleToggleUrlBarFocus={handleToggleUrlBarFocus}
            dashboardOpen={dashboardOpen}

          />
          <AddToReadingListButton>
            <AddTabIcon/>
          </AddToReadingListButton>
        </UrlBarContainer>
        <GoToDashboardButtonWrap dashboardOpen={dashboardOpen} toggle={toggleWorkspaces ? 'true' : 'false' }>
          <PreToDashBoardButton>
            <ToDashboardIcon/>
          </PreToDashBoardButton>
          <GoToDashboardButton onClick={handleOpenDashBoard} to={`/dashboard/${currentWorkspace}`}>
            <DashboardIcon />
            <span>Dashboard</span>
          </GoToDashboardButton>
        </GoToDashboardButtonWrap>
        <ReadListNavSettingsWrap>
          <ReadingListButton
            savedLinksOpen={savedLinksOpen}
            dashboardOpen={dashboardOpen}
            onClick={toggleSavedLinksOpen}
          >
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
