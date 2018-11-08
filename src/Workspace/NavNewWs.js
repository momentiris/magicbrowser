import React, { Component } from 'react';
import {
  NewWsContainer,
  NewWsInput,
  NewWsButtonContainer,
  NewWsArrowContainer,
  ColorPickerContainer,
  InnerNewWsContainer,
  InnerColorPickerContainer,
  NewWsColorInput,
  NewWsColorInputWrapper,
  NewWsColorDisplay
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
      newWsColorInput: '#',
      colorpickValue: '',
      newWorkspace: {
        name: '',
        color: ''
      }
    };
  }

  handleToggleNewWorkspace = async () => {
    this.setState({
      toggleOpen: !this.state.toggleOpen
    });
    await this.toggleOverflow();
  }

  handleToggleDropdown = all => {
    this.setState({
      toggleDropdown: all ? false : !this.state.toggleDropdown
    });
  }

  toggleOverflow = all => {
    setTimeout(() => this.setState({
      overflow: !this.state.overflow
    }), !this.state.overflow ? 100 : 0);
  }

  handleNewWsColorInput = ({ target }) => {
    this.setState({
      newWsColorInput: target.value === '' ? '#' : target.value,
    });
  }

  handlePickColor = async color => {
    await this.setState({
      newWorkspace : {
        color: color,
        name: this.state.newWorkspace.name
      }
    });

    this.props.addWorkspace(this.state.newWorkspace);


    this.resetToggle();
  }

  resetToggle = async () => {
    await this.setState({
      newWsColorInput: '#',
      newWorkspace: {
        name: '',
        color: ''
      }
    });

    this.handleToggleDropdown();
    this.handleToggleNewWorkspace();
    
  }

  handlePressEnter = ({ keyCode }) => {
    if (keyCode !== 13) return;
    this.props.addWorkspace(this.state.newWorkspace);
  }

  handleNewWsNameInput = ({ target }) => {
    this.setState({
      newWorkspace: {
        name: target.value,
        color: this.state.newWorkspace.color
      }
    });
  }

  render() {
    const { toggleOpen, toggleDropdown, overflow, newWsColorInput  } = this.state;
    const { isWsToggleActive} = this.props;

    return (
      <NewWsContainer open={ overflow} toggleOpen={toggleOpen} >
        <InnerNewWsContainer >
          <NewWsButtonContainer onClick={this.handleToggleNewWorkspace}>
            <AddTabIcon tilt={toggleOpen}/>
          </NewWsButtonContainer>
          <DotIcon color={this.state.newWorkspace.color || 'white'}/>
          <NewWsArrowContainer onClick={() => this.handleToggleDropdown()} open={toggleDropdown}>
            <ArrowIcon/>
          </NewWsArrowContainer>
          <NewWsInput value={this.state.newWorkspace.name} onChange={this.handleNewWsNameInput} placeholder="Name workspace..."/>
        </InnerNewWsContainer>
        <ColorPickerContainer toggleDropdown={toggleDropdown}>
          <InnerColorPickerContainer>
            {
              iconColors && iconColors.map((c, i) => <div key={i} onClick={() => this.handlePickColor(c)} color={c}><DotIcon color={c} /></div> )
            }

          </InnerColorPickerContainer>
          <NewWsColorInputWrapper>
            <NewWsColorDisplay color={newWsColorInput || 'white'}/>
            <NewWsColorInput value={this.state.newWsColorInput} onKeyDown={this.handlePressEnter} onChange={this.handleNewWsColorInput}/>
          </NewWsColorInputWrapper>
        </ColorPickerContainer>
      </NewWsContainer>
    );
  }

}

export default NavNewWs;
