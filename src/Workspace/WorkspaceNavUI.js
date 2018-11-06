import React, { Component } from 'react';
import {
  WorkspaceToggleWrap,
  WsIcon
} from './styles';

class WorkspaceNavUI extends Component {

  state = {
    isWsToggleActive: false,
  }

  handleToggle = () => {
    this.setState({isWsToggleActive: !this.state.isWsToggleActive });
  }

  render() {
    const { current, workspaces } = this.props;
    return (

      <WorkspaceToggleWrap>
        <button onClick={this.handleToggle}></button>
        {
          workspaces.filter((ws, i) => {
            return !this.state.isWsToggleActive ?
              ws === current && <WsIcon key={i}>{ws}</WsIcon> : (
                <WsIcon key={i}>{ws}</WsIcon>
              );
          })
        }
      </WorkspaceToggleWrap>
    );
  }
}

export default WorkspaceNavUI;
