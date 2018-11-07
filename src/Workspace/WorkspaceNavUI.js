import React, { Component } from 'react';
import { DotIcon } from '../common/assets/DotIcon';
import {
  WorkspaceToggleWrap,
  WsItem,
  WsItemIcon,
  WsRestContainer
} from './styles';

class WorkspaceNavUI extends Component {
  constructor(props) {
    super(props);
    this.workspacetoggle = React.createRef();

    this.state = {
      isWsToggleActive: false,
      restActive: false
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

  handleToggle = () => {
    this.setState({
      isWsToggleActive: !this.state.isWsToggleActive,
      width: !this.state.isWsToggleActive ? '100%' : this.state.startwidth,
    });

  }

  render() {
    const { current, workspaces, goToDashboard, switchWorkspaces } = this.props;
    const firstInst = workspaces
      .filter((inst,i) => inst[0] === current )
      .map((inst,i) => <WsItem onClick={this.handleToggle} current key={i}><DotIcon color={inst[1].color}/><span>{inst[0]}</span></WsItem>);

    const restInst = workspaces
      .filter((inst,i) => inst[0] !== current )
      .map((inst,i) => <WsItem onClick={({ target }) => this.handleSwitchWorkspace(inst[0], target)} key={i + 1}><DotIcon color={inst[1].color}/><span>{inst[0]}</span></WsItem>);

    return (

      <WorkspaceToggleWrap ref={this.workspacetoggle} width={this.state.width}>
        {
          firstInst
        }
        <WsRestContainer>
        {
          this.state.restActive &&  restInst
        }
        </WsRestContainer>

      </WorkspaceToggleWrap>
    );
  }
}

export default WorkspaceNavUI;
