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
  PreToDashBoardButton,
  AddIcon,
} from './styles';

class UserNavigationContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      animateSavedReadingList: false,
    };
  }
  handleAnimateSavedReadingList = () => {
    console.log(this.state.animateSavedReadingList);
    this.setState({
      animateSavedReadingList: !this.state.animateSavedReadingList,
    });
    setTimeout(() => {
      this.setState({
        animateSavedReadingList: false,
      });

    }, 800);
  }
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
      toggleSavedLinksOpen,
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
          <AddToReadingListButton onClick={this.handleAnimateSavedReadingList}>
            <AddIcon isActive={this.state.animateSavedReadingList} style={{cursor: 'pointer'}}/>
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
            isActive={this.state.animateSavedReadingList}
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
