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

  handlePickColor = color => {
    this.setState({
      newWorkspace : {
        color: color,
      }
    });
  }

  render() {
    const { toggleOpen, toggleDropdown, overflow } = this.state;
    const { isWsToggleActive } = this.props;

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
          <NewWsInput placeholder="Name workspace..."/>
        </InnerNewWsContainer>
        <ColorPickerContainer toggleDropdown={toggleDropdown}>
          <InnerColorPickerContainer>
            {
              iconColors && iconColors.map((c, i) => <div key={i} onClick={() => this.handlePickColor(c)} color={c}><DotIcon color={c} /></div> )
            }

          </InnerColorPickerContainer>
          <NewWsColorInputWrapper>
            <NewWsColorDisplay />
            <NewWsColorInput value={this.state.newWsColorInput} onChange={this.handleNewWsColorInput}/>
          </NewWsColorInputWrapper>
        </ColorPickerContainer>
      </NewWsContainer>
    );
  }

}

export default NavNewWs;
