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
} from './styles';
import {
  DotIcon,
  AddTabIcon,
  CloseTabIcon,
  ArrowIcon
} from '../../../common/assets/icons';
import { iconColors } from '../../../common/stylesheet';

class NavNewWs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overflow: false,
      newWsColorInput: '#',
      colorpickValue: '',
      newWorkspace: {
        name: '',
        color: '',
        import: false,
      }
    };
  }

  handleToggleNewWorkspace = async () => {
    await this.props.handleToggleNewWorkspace();
    const { toggleNewWorkspace } = this.props.userNavigation;
    toggleNewWorkspace && this.setRandomSuggestedColor();
    toggleNewWorkspace && this.handleToggleDropdown(false);
    await this.toggleOverflow();
  }

  setRandomSuggestedColor = () => {
    const wsColors = this.props.workspaces.map(ws => ws[1].color);
    const filteredColors = iconColors.filter(ic => {
      return !wsColors.includes(ic);
    });

    this.setState({
      newWorkspace: {
        name: this.state.newWorkspace.name,
        color: filteredColors[Math.floor(Math.random()*filteredColors.length)],
        import: this.state.newWorkspace.import,
      }
    });
  }

  handleToggleDropdown = arg => {
    this.props.handleToggleDropdown(arg);
  }

  toggleOverflow = all => {
    const { toggleNewWorkspaceOverflow } = this.props.userNavigation;
    setTimeout(() => this.props.handleToggleNewWorkspaceOverflow(),
      toggleNewWorkspaceOverflow ? 50 : 0);
  }

  handleNewWsImport = ({ target }) => {
    this.setState({
      newWorkspace: {
        name: this.state.newWorkspace.name,
        color: this.state.newWorkspace.color,
        import: target.value
      }
    });
  }

  resetToggleClean = async () => {
    await this.setState({
      newWsColorInput: '#',
      newWorkspace: {
        name: '',
        color: '',
        import: false
      }
    });

    // strange below, why need?
    this.toggleOverflow();
    this.props.handleToggleNewWorkspace();
    this.props.handleToggleDropdown();
  }

  handlePressEnter = ({ keyCode }) => {
    if (keyCode !== 13) return;
    // this.handleSubmit();
    console.log('submit');
  }

  handleNewWsNameInput = ({ target }) => {
    this.setState({
      newWorkspace: {
        name: target.value,
        color: this.state.newWorkspace.color,
        import: this.state.newWorkspace.import
      }
    });
  }

  handlePickColor = color => {
    this.setState({
      newWorkspace : {
        color: color,
        name: this.state.newWorkspace.name,
        import: this.state.newWorkspace.import
      }
    });
  }

  handleSubmit = async () => {
    await this.setState({
      newWorkspace : {
        color: this.state.newWorkspace.color,
        name: this.state.newWorkspace.name,
        import: this.state.newWorkspace.import
      }
    });

    await this.props.addWorkspace(this.state.newWorkspace);

    this.resetToggleClean();
  }

  render() {
    const {  toggleDropdown, overflow, newWsColorInput  } = this.state;
    const {
      isWsToggleActive,
      workspaces,
      userNavigation,
    } = this.props;

    return (

      <NewWsContainer className="NewWsContainer"
        open={userNavigation.toggleNewWorkspaceOverflow}
        toggleOpen={userNavigation.toggleNewWorkspace}
        onKeyDown={this.handlePressEnter}
      >
        <InnerNewWsContainer >
          <NewWsButtonContainer onClick={this.handleToggleNewWorkspace}>
            <AddTabIcon tilt={userNavigation.toggleNewWorkspace}/>
          </NewWsButtonContainer>
          <DotIcon color={this.state.newWorkspace.color}/>
          <NewWsInput
            onMouseDown={() => this.handleToggleDropdown(true)}
            value={this.state.newWorkspace.name}
            onChange={this.handleNewWsNameInput}
            placeholder="Name workspace..."/>
        </InnerNewWsContainer>
        <ColorPickerContainer toggleDropdown={userNavigation.toggleDropdown}>
          <InnerColorPickerContainer>
            {
              iconColors && iconColors.map((c, i) =>
                <div
                  key={i}
                  onClick={() => this.handlePickColor(c)}
                  color={c}>
                  <DotIcon color={c} />
                </div>
              )
            }

          </InnerColorPickerContainer>
          <NewWsColorInputWrapper>
            <span>Import tabs from</span>
            <NewWsColorInput onChange={this.handleNewWsImport}>
              <option value="false">Don't import</option>
              { workspaces.map((ws, i) => <option key={i} value={ws[0]}>{ws[0]}</option> )}
            </NewWsColorInput>
          </NewWsColorInputWrapper>
          <span onClick={this.handleSubmit} style={{cursor: 'pointer', alignSelf: 'flex-start'}}>Create</span>
        </ColorPickerContainer>
      </NewWsContainer>

    );
  }

}

export default NavNewWs;
