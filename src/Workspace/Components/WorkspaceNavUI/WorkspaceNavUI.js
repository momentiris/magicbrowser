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
  WsItemIcon,
  WsRestContainer,
  NewWsContainer
} from './styles';

import {
  handleToggleWorkspaces,
  handleToggleDropdown,
  handleToggleNewWorkspace,
  handleToggleNewWorkspaceOverflow,
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

  componentDidMount() {
    const { toggleWorkspaces } = this.props.userNavigation;
    this.setState({
      startwidth: this.workspacetoggle.current.clientWidth ,
      width: this.workspacetoggle.current.clientWidth,
    });

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
    await this.handleToggle();
  }

  handleToggle = async () => {
    await this.props.handleToggleWorkspaces();
    console.log();
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
    this.measureWsRestContainer();
  }

  measureWsRestContainer = () => {
    console.log(this.WsRestContainer.current.clientWidth);
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

    const { overflow, width } = this.state;

    const firstInst = workspaces
      .filter((inst,i) => inst[0] === current)
      .map((inst,i) => (
        <WsItem
          width={width + 'px'}
          onClick={this.handleToggle}
          current
          clicked={userNavigation.toggleWorkspaces}
          key={i}
        >
          <DotIcon color={inst[1].color}/>
          <span>{inst[0]}</span>
        </WsItem>
      ));

    const restInst = workspaces
      .filter((inst,i) => inst[0] !== current )
      .map((inst,i) => (
        <WsItem
          onClick={({ target }) => this.handleSwitchWorkspace(inst[0], target)}
          key={i + 1}
        >
          <DotIcon color={inst[1].color}/>
          <span>{inst[0]}</span>
        </WsItem>
      ));
console.log( this.WsRestContainer.current && this.WsRestContainer.current.clientWidth);
    return (

      <WorkspaceToggleWrap open={overflow} ref={this.workspacetoggle} width={width + 'px'}>
        { firstInst }
        { this.state.restActive && (
          <WsRestContainer ref={this.WsRestContainer}>
            {restInst}
            <NavNewWs
              handleToggleNewWorkspace={handleToggleNewWorkspace}
              handleToggleNewWorkspaceOverflow={handleToggleNewWorkspaceOverflow}
              userNavigation={userNavigation}
              workspaces={workspaces}
              handleToggle={this.handleToggle}
              isWsToggleActive={userNavigation.toggleWorkspaces}
              addWorkspace={addWorkspace}
              open={overflow}
              handleToggleDropdown={handleToggleDropdown}
              handleToggleWorkspaces={handleToggleWorkspaces}
            />
          </WsRestContainer>
        ) }
      </WorkspaceToggleWrap>
    );
  }
}

const userNavSelector = createSelector(
  state => state.userNavigation,
  userNavigation => userNavigation,
);

const mapStateToProps = createSelector(
  userNavSelector,
  userNavigation => ({
    userNavigation,
  }),
);

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    handleToggleWorkspaces: handleToggleWorkspaces,
    handleToggleDropdown: handleToggleDropdown,
    handleToggleNewWorkspace: handleToggleNewWorkspace,
    handleToggleNewWorkspaceOverflow: handleToggleNewWorkspaceOverflow
  }, dispatch);
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, {
    userNavigation: stateProps.userNavigation,
    handleToggleWorkspaces: dispatchProps.handleToggleWorkspaces,
    handleToggleDropdown: arg => dispatchProps.handleToggleDropdown(arg),
    handleToggleNewWorkspace: dispatchProps.handleToggleNewWorkspace,
    handleToggleNewWorkspaceOverflow: dispatchProps.handleToggleNewWorkspaceOverflow
  });
};

export default connect(mapStateToProps, mapActionsToProps, mergeProps)(WorkspaceNavUI);
