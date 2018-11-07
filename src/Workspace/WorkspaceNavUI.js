import React, { Component } from 'react';
import {
  WorkspaceToggleWrap,
  WsIcon
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

  handleToggle = () => {
    this.setState({
      isWsToggleActive: !this.state.isWsToggleActive,
      width: !this.state.isWsToggleActive ? '100%' : this.state.startwidth,
    });
  }

  render() {

    const { current, workspaces, goToDashboard } = this.props;
    const firstInst = workspaces.filter((inst,i) => i === 0 ).map((inst,i) => <WsIcon onClick={this.handleToggle} current key={i}>{inst}</WsIcon>);
    const restInst = workspaces.filter((inst,i) => i !== 0 ).map((inst,i) => <WsIcon key={i + 1}>{inst}</WsIcon>);

    return (

      <WorkspaceToggleWrap ref={this.workspacetoggle} width={this.state.width}>
        {
          firstInst
        }
        {
          this.state.restActive && restInst
        }
      </WorkspaceToggleWrap>
    );
  }
}

export default WorkspaceNavUI;
