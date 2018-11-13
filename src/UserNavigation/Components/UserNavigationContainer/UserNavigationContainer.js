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
      currentWorkspace
    } = this.props;

    const {
      toggleWorkspaces,
      toggleUrlBarFocus

    } = userNavigation;
    return (
      <Container>
        <PageNavigationContainer/>
        <WorkspaceHandler/>
        <UrlBarContainer
          clicked={toggleUrlBarFocus}
          show={toggleWorkspaces}
        >
          <UrlBar
            userNavigation={userNavigation}
            navigateToUrl={navigateToUrl}
            handleToggleUrlBarFocus={handleToggleUrlBarFocus}
          />
          <AddToReadingListButton>
            <AddTabIcon/>
          </AddToReadingListButton>
        </UrlBarContainer>
        <GoToDashboardButtonWrap toggle={toggleWorkspaces ? 'true' : 'false' }>
          <PreToDashBoardButton>
            <ToDashboardIcon/>
          </PreToDashBoardButton>
          <GoToDashboardButton onClick={handleOpenDashBoard} to={`/dashboard/${currentWorkspace}`}>
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
