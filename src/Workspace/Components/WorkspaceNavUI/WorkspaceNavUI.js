import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import NavNewWs from '../NavNewWs/NavNewWs';

import {
  DotIcon,
} from '../../../common/assets/icons';

import {
  WorkspaceToggleWrap,
  WsItem,
  WsRestContainer,
} from './styles';

import {
  handleToggleWorkspaces,
  handleToggleDropdown,
  handleToggleNewWorkspace,
  handleToggleNewWorkspaceOverflow,
  handleDashboardOpenUI
} from '../../../UserNavigation/actions';

class WorkspaceNavUI extends Component {
  constructor(props) {
    super(props);
    this.workspacetoggle = React.createRef();
    this.WsRestContainer = React.createRef();
    this.state = {
      restActive: false,
      isNewWsActive: false,
      overflow: false,
    };
  }

  async componentDidMount() {
    const { toggleWorkspaces } = this.props.userNavigation;

    await this.setState({
      startwidth: this.workspacetoggle.current.clientWidth ,
      width: this.workspacetoggle.current.clientWidth,
    });

    if (this.props.currentURL === 'dashboard') {
      this.props.handleDashboardOpenUI({hide: true});
    }

    setTimeout(this.setState({
      restActive: true,
    }), 200);
  }

  handleSwitchWorkspace = async (ws, elem) => {
    this.props.switchWorkspaces(ws);
    await this.setState({
      startwidth: elem.clientWidth,
      width: elem.clientWidth,
    });
    this.handleToggle();
  }

  handleToggle = async () => {
    await this.props.handleToggleWorkspaces();
    const {
      toggleWorkspaces,
      toggleDropdown,
      toggleNewWorkspace,
      toggleNewWorkspaceOverflow
    } = this.props.userNavigation;

    await this.setState({
      width: toggleWorkspaces ? this.WsRestContainer.current.clientWidth + this.state.startwidth : this.state.startwidth,
    });

    toggleDropdown && this.props.handleToggleDropdown(false);
    toggleNewWorkspace && this.props.handleToggleNewWorkspace();
    toggleNewWorkspaceOverflow && this.props.handleToggleNewWorkspaceOverflow();
    await this.toggleOverflow();

  }

  toggleOverflow = async () => {
    const { toggleWorkspaces } = this.props.userNavigation;
    await setTimeout(
      () => this.setState({
        overflow: toggleWorkspaces
      }),
      toggleWorkspaces ? 200 : 0
    );
  }

  render() {
    const {
      current,
      workspaces,
      goToDashboard,
      switchWorkspaces,
      addWorkspace,
      handleToggleDropdown,
      userNavigation,
      handleToggleNewWorkspace,
      handleToggleNewWorkspaceOverflow,
      handleToggleWorkspaces
    } = this.props;

    const {
      dashboardOpen,
      toggleWorkspaces
    } = userNavigation;

    const { overflow, width, startwidth } = this.state;
    const firstInst = workspaces
      .filter((inst,i) => inst[0] === current)
      .map((inst,i) => (
        <WsItem
          width={width + 'px'}
          onClick={this.handleToggle}
          current
          clicked={toggleWorkspaces}
          key={i}
        >
          <DotIcon color={inst[1].color}/>
          <span>{inst[0]}</span>
        </WsItem>
      ));

    const restInst = workspaces
      .filter((inst,i) => inst[0] !== current)
      .map((inst,i) => (
        <WsItem
          first={i === 0}
          onClick={({ target }) => this.handleSwitchWorkspace(inst[0], target)}
          key={i + 1}
        >
          <DotIcon color={inst[1].color}/>
          <span>{inst[0]}</span>
        </WsItem>
      ));

    return (
      <WorkspaceToggleWrap
        className="workspaceToggleWrap"
        dashboardOpen={dashboardOpen}
        open={overflow}
        ref={this.workspacetoggle}
        width={dashboardOpen ? startwidth + 'px' : toggleWorkspaces ? width + 'px' : startwidth + 'px'}
        startWidth={startwidth}
        toggleWorkspaces={toggleWorkspaces}
      >
        { firstInst }
        {
          this.state.restActive && (
            <WsRestContainer ref={this.WsRestContainer}>

              <NavNewWs
                handleToggleNewWorkspace={handleToggleNewWorkspace}
                handleToggleNewWorkspaceOverflow={handleToggleNewWorkspaceOverflow}
                userNavigation={userNavigation}
                workspaces={workspaces}
                handleToggle={this.handleToggle}
                isWsToggleActive={toggleWorkspaces}
                addWorkspace={addWorkspace}
                open={overflow}
                handleToggleDropdown={handleToggleDropdown}
                handleToggleWorkspaces={handleToggleWorkspaces}
                measureWsRestContainer={this.measureWsRestContainer}
              />
              { restInst }
            </WsRestContainer>
          )
        }
      </WorkspaceToggleWrap>
    );
  }
}

const userNavSelector = createSelector(
  state => state.userNavigation,
  userNavigation => userNavigation,
);
const workspacesSelector = createSelector(
  state => state.workspaces,
  workspaces => workspaces
);

const mapStateToProps = createSelector(
  userNavSelector,
  workspacesSelector,
  (userNavigation, workspaces) => ({
    userNavigation,
    workspaces
  }),
);

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    handleToggleWorkspaces: handleToggleWorkspaces,
    handleToggleDropdown: handleToggleDropdown,
    handleToggleNewWorkspace: handleToggleNewWorkspace,
    handleToggleNewWorkspaceOverflow: handleToggleNewWorkspaceOverflow,
    handleDashboardOpenUI: handleDashboardOpenUI
  }, dispatch);
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, {
    userNavigation: stateProps.userNavigation,
    handleToggleWorkspaces: dispatchProps.handleToggleWorkspaces,
    handleToggleDropdown: arg => dispatchProps.handleToggleDropdown(arg),
    handleToggleNewWorkspace: dispatchProps.handleToggleNewWorkspace,
    handleToggleNewWorkspaceOverflow: dispatchProps.handleToggleNewWorkspaceOverflow,
    handleDashboardOpenUI: dispatchProps.handleDashboardOpenUI,
    currentURL: stateProps.workspaces[stateProps.workspaces.current]
      .tabs[stateProps.workspaces[stateProps.workspaces.current].active].src
  });
};

export default connect(mapStateToProps, mapActionsToProps, mergeProps)(WorkspaceNavUI);
