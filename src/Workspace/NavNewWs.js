import React, { Component } from 'react';
import {
  NewWsContainer,
  NewWsInput,
  NewWsButtonContainer,
  NewWsArrowContainer,
  ColorPickerContainer,
  InnerNewWsContainer
} from './styles';
import {
  DotIcon,
  AddTabIcon,
  CloseTabIcon,
  ArrowIcon
} from '../common/assets/icons';
import { iconColors } from '../common/stylesheet';

class NavNewWs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleOpen: false,
      toggleDropdown: false,
      overflow: false,
    };
  }

  handleToggleNewWorkspace = async () => {
    this.setState({
      toggleOpen: !this.state.toggleOpen
    });
    await this.toggleOverflow();
  }

  handleToggleDropdown = () => {
    this.setState({
      toggleDropdown: !this.state.toggleDropdown
    });
  }

  toggleOverflow = () => {
    setTimeout(() => this.setState({overflow: !this.state.overflow}), !this.state.overflow ? 100 : 0);
  }


  render() {
    const { toggleOpen, toggleDropdown } = this.state;
    return (
      <NewWsContainer open={this.state.overflow} toggleOpen={this.state.toggleOpen} >
        <InnerNewWsContainer >
          <NewWsButtonContainer onClick={this.handleToggleNewWorkspace}>
            <AddTabIcon tilt={toggleOpen}/>
          </NewWsButtonContainer>
          <NewWsArrowContainer onClick={this.handleToggleDropdown} open={toggleDropdown}>
            <ArrowIcon/>
          </NewWsArrowContainer>
          <NewWsInput placeholder="Name workspace..."/>
        </InnerNewWsContainer>
        <ColorPickerContainer toggleDropdown={toggleDropdown}></ColorPickerContainer>
      </NewWsContainer>
    );
  }

}

export default NavNewWs;
