import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import WsColor from './WsColors/';
import {arrayMove} from 'react-sortable-hoc';
import DashboardTabs from './DashboardTabs';
import SavedLinks from './SavedLinks';
import DashboardWorkspaces from './DashboardWorkspaces';
import { HistoryIcon } from '../common/assets/icons.js';
import History from './History/History';

import {
  Container,
  Column,
  Ul,
  Li,
  TabItems,
  TabWrapper,
  Button,
  Hover,
  NewWsHover,
  AddNewWs,
  Input,
  CreateButton,
  CancelButton,
  NewWsButton,
  AnimateForm,
  TabLength,
  RightArrow,
  RightArrowNewWs,
  LeftArrow,
  Add,
  AddIcon,
  AddNewTab,
  Close,
  SavedLinksHeader,
  SavedLinksWrapper,
  SavedLinksItems,
  RenameEdit,
  AnimateEditForm,
  BorderBottom,
  HistoryButton,
  WorkspaceInfoWrapper,
  WsWrapp,
  TabsHeader,
  Wrapper,
  AnimateTabs
} from './styles';


import {
  addWorkspace,
  switchWorkspaces,
  initEmptyWorkspace,
  addOneTab,
  removeSelectedTab,
  handleDragDashBoardSavedLinks,
  renameWorkspace,
  handleOpenDashBoard,
} from '../Workspace/actions';

import { iconColors } from '../common/stylesheet';



class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.workspaceInput = React.createRef();
    this.onToggle = this.onToggle.bind(this);
    this.state = {
      toggle: {
        active: false,
        id: '',
      },
      toggleRename: false,
      workspaceToggle: false,
      anim: true,
      animateshistory: false,
      animatesworkspace: false,
      animatestabs: false,
      editWorkspaceToggle: {
        active: false,
        id: '',
      },
      isActive: true,
      wsButtonColor: '',
      newWorkspace: {
        name: '',
        color: ''
      },
      editWorkspace: {
        newName: '',
        newColor: '',
        target: null
      },
      tabs: this.props.tabs,
    };
  }

  commonToggle = (i) => {
    this.setState({
      toggle: {
        active: i === this.state.toggle.id ? !this.state.toggle.active : true,
        id: i
      }
    });
  }

  onToggle = async () => {
    await this.setState({ workspaceToggle: !this.state.workspaceToggle });
    this.state.workspaceToggle && this.setRandomSuggestedColor('newWorkspace');
    this.workspaceInput.current.focus();
  }

  onToggleRename = (i) => {
    this.state.toggleRename && this.setRandomSuggestedColor('editWorkspace');
    this.setState({ toggleRename: !this.state.toggleRename });
  }

  editWorkspace = (i) => {
    this.setState({
      editWorkspaceToggle: {
        active: i === this.state.editWorkspaceToggle.id ? !this.state.editWorkspaceToggle.active : true,
        id: i
      }
    });
  }

  setRandomSuggestedColor = (type) => {
    const wsColors = this.props.workspaces.map(ws => ws[1].color);
    const filteredColors = iconColors.filter(ic => {
      return !wsColors.includes(ic);
    });

    this.setState({
      [type]: {
        ...this.state[type],
        color: filteredColors[Math.floor(Math.random()*filteredColors.length)],
      }
    });
  }

  // handleClick = async value => {
  //   await this.props.handleCurrentWsUI(value);
  // }
  handleClick = async ({ target: { value } }) => {
    await this.props.handleCurrentWsUI(value);
  }

  addWorkspace = e => {
    e.preventDefault();
    this.props.addWorkspace({
      ...this.state.newWorkspace,
      switch: false
    });
  }

  renameWorkspace = async (e, i) => {
    e.preventDefault();
    this.setState({
      editWorkspace: {
        newName: '',
        newColor: '',
        target: null
      },
      editWorkspaceToggle: {
        active: true,
        id: false
      },
    });

    await this.props.renameWorkspace(this.state.editWorkspace);
  }

  handleInputChange = e => {
    this.setState({
      renameworkspace: e.target.value,
      newWorkspace: {
        name: e.target.value,
        color: this.state.newWorkspace.color,
      }
    });
  }

  handleInputEditName = (e, i) => {
    this.setState({
      editWorkspace: {
        ...this.state.editWorkspace,
        newName: e.target.value,
        target: i,
      }
    });
  }

  handleInputEditColor = (color, i) => {
    this.setState({
      editWorkspace: {
        ...this.state.editWorkspace,
        newColor: color,
        target: i
      }
    });
  }

  addOneTab = ws => {
    console.log(ws);
    this.props.addOneTab({
      ws: ws
    });
  }

  removeSelectedTab = id => {
    console.log(id);
    this.props.removeSelectedTab(id);
  }

  deleteWorkspace = id => {
    const target = [id];
    const withoutTarget = this.props.workspaces.filter((ws, i) => ws[0] !== id);

    withoutTarget.length && this.props.handleCurrentWsUI(withoutTarget[0][0]);
    this.props.deleteWorkspace(id);
  }

  updateWsColor = (color) => {
    this.setState({
      wsButtonColor: color,
      newWorkspace: {
        color: color,
        name: this.state.newWorkspace.name
      }
    });
  }

  onSortEnd = async ({oldIndex, newIndex}, { target }) => {
    const newTabs = arrayMove(this.props.tabs, oldIndex, newIndex);
    await this.props.handleDragDashBoardTab({
      newTabs,
      newIndex,
      dashboard: true
    });
  }

  onSortEndSavedLinks = async ({oldIndex, newIndex}, { target }) => {
    const newSavedLink = arrayMove(this.props.savedLinks, oldIndex, newIndex);
    await this.props.handleDragDashBoardSavedLinks({
      newSavedLink,
      newIndex,
      dashboard: true
    });
  }

  handleGoBack = () => {
    this.props.handleOpenDashBoard({
      id: this.props.current
    });
  }

  animate = () => {
    this.setState({
      // animatemain: !this.state.animatemain,
      anim: !this.state.anim,
      animatesworkspace: !this.state.animatesworkspace,
      animatestabs: !this.state.animatestabs,
      animateshistory: !this.state.animateshistory,
    });
  }

  shouldCancelStart = (e) => {
    // Prevent sorting from being triggered if target is input or button
    if (['input', 'button'].indexOf(e.target.tagName.toLowerCase()) !== -1) {
      return true; // Return true to cancel sorting
    }
  };

  render() {
    const { toggleRename, editWorkspace, } = this.state;
    const {
      active,
      workspaces,
      tabs,
      workspacestemp,
      workspace,
      savedLinks,
      current,
      currentWsUI
    } = this.props;

    const currentTabs = workspacestemp[currentWsUI || current].tabs;
    const currentSavedLinks = workspacestemp[currentWsUI || current].savedLinks;

    return (
      <Container>
        <HistoryButton onClick={this.animate}><HistoryIcon /> Show History</HistoryButton>
        <div>
          <AddNewWs isActive={this.state.animatesworkspace}>
            <NewWsButton onClick={this.onToggle}>
              <Add isActive={this.state.workspaceToggle}/>New workspace
            </NewWsButton>
            <AnimateForm isActive={this.state.workspaceToggle}>
              <form onSubmit={this.addWorkspace} style={{height: '100%'}}>
                <NewWsHover isActive={this.state.workspaceToggle} color={this.state.newWorkspace.color || '#5C4EFF'}>
                  <RightArrowNewWs />
                </NewWsHover>
                <Input
                  ref={this.workspaceInput}
                  onChange={this.handleInputChange}
                  active={this.state.isActive}
                  type="text"
                  placeholder="Name your workspace"/>
                <WsColor updateWsColor={this.updateWsColor}/>
                <CreateButton onClick={this.onToggle} type="submit">Create</CreateButton>
                <CancelButton onClick={this.onToggle} type="button">Cancel</CancelButton>
              </form>
            </AnimateForm>
            <WsWrapp>
              <TabsHeader>Tabs</TabsHeader>
            </WsWrapp>
          </AddNewWs>

          <Column>
            <DashboardWorkspaces
              currentWsUI={currentWsUI}
              workspaces={workspaces}
              handleClick={this.handleClick}
              renameWorkspace={this.renameWorkspace}
              editWorkspace={this.editWorkspace}
              handleInputEditName={this.handleInputEditName}
              handleInputEditColor={this.handleInputEditColor}
              workspaceToggle={this.state.workspaceToggle}
              editWorkspaceToggle={this.state.editWorkspaceToggle}
              updateWorkspace={this.state.editWorkspace}
              onToggleRename={this.onToggleRename}
              isActive={active}
              editWorkspaceValue={editWorkspace}
              animatesworkspace={this.state.animatesworkspace}
              deleteWorkspace={this.deleteWorkspace}
              commonToggle={this.commonToggle}
              toggle={this.state.toggle}
            />
            <AnimateTabs isActive={this.state.animatestabs}>
              <DashboardTabs
                onSortEnd={this.onSortEnd}
                active={active}
                currentWsUI={currentWsUI}
                tabs={currentTabs}
                addOneTab={this.addOneTab}
                savedLinks={savedLinks}
                removeSelectedTab={this.removeSelectedTab}
              >
              </DashboardTabs>
              <SavedLinks
                onSortEndSavedLinks={this.onSortEndSavedLinks}
                active={active}
                savedLinks={currentSavedLinks}
                currentWsUI={currentWsUI}
              >
              </SavedLinks>
            </AnimateTabs>
          </Column>
        </div>


        <History
          workspace={workspace}
          currentWsUI={currentWsUI}
          animateshistory={this.state.animateshistory}
        />

      </Container>
    );
  }
}

export default Dashboard;
