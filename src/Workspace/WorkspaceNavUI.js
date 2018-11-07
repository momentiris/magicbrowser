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

  handleSwitchWorkspace = (ws, elem) => {
    this.props.switchWorkspaces(ws);
    console.log(elem);
    this.setState({
      startwidth: elem.clientWidth + 'px',
      isWsToggleActive: !this.state.isWsToggleActive,
      width: elem.clientWidth + 'px',
    });
  }

  handleToggle = async () => {
    await this.setState({
      isWsToggleActive: !this.state.isWsToggleActive,
      width: !this.state.isWsToggleActive ? '100%' : this.state.startwidth,
    });
    await this.toggleOverflow();
  }

  handleNewWorkspace = () => {
    console.log('hej');
  }

  toggleOverflow = () => {
    setTimeout(this.setState({overflow: !this.state.overflow}), 200);
  }

  render() {
    const { current, workspaces, goToDashboard, switchWorkspaces } = this.props;

    const firstInst = workspaces
      .filter((inst,i) => inst[0] === current)
      .map((inst,i) => (
        <WsItem
          onClick={this.handleToggle}
          current
          clicked={this.state.isWsToggleActive}
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

      <WorkspaceToggleWrap open={this.state.overflow} ref={this.workspacetoggle} width={this.state.width}>
        { firstInst }
        { this.state.restActive && (
          <WsRestContainer>
            {restInst}
            <NavNewWs open={this.state.overflow}/>
          </WsRestContainer>
        ) }
      </WorkspaceToggleWrap>
    );
  }
}

export default WorkspaceNavUI;
