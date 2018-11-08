import React, { Component } from 'react';
import NavNewWs from './NavNewWs';
import {
  DotIcon,
} from '../common/assets/icons';
import {
  WorkspaceToggleWrap,
  WsItem,
  WsItemIcon,
  WsRestContainer,
  NewWsContainer
} from './styles';

class WorkspaceNavUI extends Component {
  constructor(props) {
    super(props);
    this.workspacetoggle = React.createRef();
    this.WsRestContainer = React.createRef();
    this.state = {
      isWsToggleActive: false,
      restActive: false,
      isNewWsActive: false,
      overflow: false
    };
  }

  componentDidMount() {
    this.setState({
      startwidth: this.workspacetoggle.current.clientWidth + 'px',
      width: this.workspacetoggle.current.clientWidth + 'px',
    });

    setTimeout(this.setState({
      restActive: true,
    }), 200);
  }

  handleSwitchWorkspace = async (ws, elem) => {
    this.props.switchWorkspaces(ws);
    console.log(ws);
    await this.setState({
      startwidth: elem.clientWidth + 'px',
      width: elem.clientWidth + 'px',
    });
    await this.handleToggle();
  }


  handleToggle = async () => {
    await this.setState({
      isWsToggleActive: !this.state.isWsToggleActive,
      width: !this.state.isWsToggleActive ? '100%' : this.state.startwidth,
    });
    await this.toggleOverflow();
    this.measureWsRestContainer();
  }

  measureWsRestContainer = () => {
    console.log(this.WsRestContainer.current.clientWidth);
  }

  handleNewWorkspace = () => {
    console.log('hej');
  }

  toggleOverflow = async () => {
    await setTimeout(() => this.setState({overflow: !this.state.overflow}), !this.state.overflow ? 300 : 0);
  }

  render() {
    const { current, workspaces, goToDashboard, switchWorkspaces, addWorkspace } = this.props;
    const { isWsToggleActive, overflow, width } = this.state;

    const firstInst = workspaces
      .filter((inst,i) => inst[0] === current)
      .map((inst,i) => (
        <WsItem
          onClick={this.handleToggle}
          current
          clicked={isWsToggleActive}
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

    return (

      <WorkspaceToggleWrap open={overflow} ref={this.workspacetoggle} width={width}>
        { firstInst }
        { this.state.restActive && (
          <WsRestContainer ref={this.WsRestContainer}>
            {restInst}
            <NavNewWs handleToggle={this.handleToggle} isWsToggleActive={isWsToggleActive} addWorkspace={addWorkspace} open={overflow}/>
          </WsRestContainer>
        ) }
      </WorkspaceToggleWrap>
    );
  }
}

export default WorkspaceNavUI;
