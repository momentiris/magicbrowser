import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import WsColor from './WsColors/';
import {arrayMove} from 'react-sortable-hoc';
import DashboardTabs from './DashboardTabs';
import DashboardWorkspaces from './DashboardWorkspaces';
import { HistoryIcon } from '../common/assets/icons.js';
import History from './History/History';
import './transition.css';
import { CSSTransition } from 'react-transition-group';
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
  SavedLinks,
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
  handleDragDashBoardTab,
  renameWorkspace,
  handleOpenDashBoard
} from '../Workspace/actions';



class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.workspaceInput = React.createRef();
    this.onToggle = this.onToggle.bind(this);
    this.state = {
      toggle: false,
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
      currentWsUI: this.props.current
    };
  }

  onToggle = () => {
    this.setState({ workspaceToggle: !this.state.workspaceToggle });
    this.workspaceInput.current.focus();
  }

  onToggleRename = (i) => {
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

  handleClick = ({ target: { value } }) => {
    this.setState({
      currentWsUI: value,
    });
  }

  addWorkspace = e => {
    e.preventDefault();
    this.props.addWorkspace(this.state.newWorkspace);
  }

  renameWorkspace = async (e, i) => {
    e.preventDefault();
    this.setState({currentWsUI: this.state.editWorkspace.newName});
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
    this.props.removeSelectedTab(id);
    console.log(this.props.removeSelectedTab(id));
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
    const { currentWsUI } = this.state;
    const { workspace } = this.props;
    const { active, workspaces, tabs, workspacestemp } = this.props;
    const currentTabs = workspacestemp[currentWsUI].tabs;
    const { savedLinks } = this.props;

    return (
      <Container>
        <HistoryButton onClick={this.animate}><HistoryIcon /> Show History</HistoryButton>
              <div>
                <AddNewWs isActive={this.state.animatesworkspace}>
                  <NewWsButton onClick={this.onToggle}>
                    <Add isActive={this.state.workspaceToggle}/>{this.state.animatesworkspace ? 'Tabs' : 'New workspace'}
                  </NewWsButton>
                  <AnimateForm isActive={this.state.workspaceToggle}>
                    <form onSubmit={this.addWorkspace} style={{height: '100%'}}>
                      <NewWsHover isActive={this.state.workspaceToggle} color={this.state.wsButtonColor || '#5C4EFF'}>
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
                      workspaces={workspaces}
                      currentWsUI={currentWsUI}
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
                      animatesworkspace={this.state.animatesworkspace}
                    />
                  <AnimateTabs isActive={this.state.animatestabs}>
                    <DashboardTabs
                      onSortEnd={this.onSortEnd}
                      active={active}
                      currentWsUI={currentWsUI}
                      tabs={currentTabs}
                      addOneTab={this.addOneTab}
                      savedLinks={savedLinks}
                    >
                  </DashboardTabs>
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
