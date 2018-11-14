import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import WsColor from './WsColors/';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import './sortableHelperStyles.css';
// import Drop from './droppable/Droppable.js';
// import WsHover from './WorkSpaceButton/wshover';
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
  RenameEdit,
  AnimateEditForm,
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
} from '../actions';

const SortableItem = SortableElement(({value, style}) => <TabItems hideSortableGhost="false" className="TabItems" >{value}</TabItems>);
const SortableList = SortableContainer(({items}) => (
  <TabWrapper className="container" >
    {items.map((item, index) => {
      return <SortableItem key={`item-${index}`} index={index} value={item.src} />;
    })}
  </TabWrapper>
));

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.workspaceInput = React.createRef();
    this.onToggle = this.onToggle.bind(this);
    this.state = {
      toggle: false,
      toggleRename: false,
      workspaceToggle: false,
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

  componentDidMount() {
    console.log(this.props.workspacestemp);
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
    // this.setState({ toggle: !this.state.toggle });
  }

  renameWorkspace = (e, i) => {
    e.preventDefault();
    this.props.renameWorkspace(this.state.editWorkspace);
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
    if (target.dataset.ws) {
    }
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

  // TODO: Move the Button and hover to own components, to make different states
  //       Drag n' drop the individual tab.
  //       complete the edit/rename workspace dropdown

  render() {
    const { currentWsUI } = this.state;
    const { active, workspaces, tabs, workspacestemp } = this.props;
    const currentTabs = workspacestemp[currentWsUI].tabs;


    const SortableItem = SortableElement(({value, tabindex}) => {
      return (
        <TabItems key={tabindex} id={tabindex} className={`${active && 'Showcase__style__stylizedHelper'}`}>
          {value}
          {value.id}
          <Close onClick={() => this.removeSelectedTab(tabindex)}></Close>
        </TabItems>
      );
    });
    const SortableList = SortableContainer(({items}) => {
      return (
        <TabWrapper>
          {items.map((item, index) => {
            return <SortableItem  key={`item-${index}`} id={index} tabindex={index} index={index} value={item.src}> </SortableItem>;
          })}
          <AddNewTab onClick={() => this.addOneTab(currentWsUI)}>
            <AddIcon />
          </AddNewTab>
        </TabWrapper>
      );
    });

    return (
      <Container>
        <AddNewWs>
          <NewWsButton onClick={this.handleGoBack}>
            <LeftArrow />
            Back
          </NewWsButton>
          <br />
          <NewWsButton onClick={this.onToggle}>
            <Add isActive={this.state.workspaceToggle}/>New workspace
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
                placeholder="Rename your workspace"/>
              <WsColor updateWsColor={this.updateWsColor}/>
              <CreateButton onClick={this.onToggle} type="submit">Create</CreateButton>
              <CancelButton onClick={this.onToggle} type="button">Cancel</CancelButton>
            </form>
          </AnimateForm>
        </AddNewWs>
        <Column>
          <Ul name="workspaces">
            {
              workspaces.map((ws, i) => (
                <Li  key={i} data-ws={i}>
                  <Button  data-ws={i} onClick={this.handleClick} value={ws[0]}>
                    <Hover isTarget={currentWsUI === ws[0]} color={
                      this.state.editWorkspace.target === ws[0] &&
                      this.state.editWorkspace.newColor || ws[1].color || '#5C4EFF'}>
                      <RightArrow shouldbeBlack={ws[1].color === 'white'}/>
                    </Hover>

                    {
                      ws[0]
                    }
                  </Button>
                  <RenameEdit onClick={() => this.editWorkspace(i)} value={ws[0]} />
                  <AnimateEditForm isActive={this.state.editWorkspaceToggle} id={i}>
                    <form onSubmit={(e) => this.renameWorkspace(e)} style={{height: '100%'}}>
                      <NewWsHover isActive={this.state.workspaceToggle} color={ws[1].color}>
                        <RightArrowNewWs />
                      </NewWsHover>
                      <Input
                        onChange={(e) => this.handleInputEditName(e, ws[0])}
                        active={this.state.isActive}
                        type="text"
                        placeholder="Name your workspace"/>
                      <WsColor updateWsColor={(e) => this.handleInputEditColor(e, ws[0])}/>
                      <CreateButton onClick={this.onToggleRename} type="submit">Save</CreateButton>
                      <CancelButton onClick={this.onToggleRename} type="button">Cancel</CancelButton>
                    </form>
                  </AnimateEditForm>
                  <br />
                  <TabLength>
                    {`${ws[1].tabs.length} ${ws[1].tabs.length > 1 ? 'Tabs' : 'Tab'}`}
                  </TabLength>
                </Li>
              ))
            }
          </Ul>
          <SortableList items={currentTabs} onSortEnd={this.onSortEnd.bind(this)} axis='xy'>
          </SortableList>
        </Column>
        <SavedLinks>
          <Ul name="workspaces">
            <SavedLinksHeader>
              Saved Links
            </SavedLinksHeader>
          </Ul>
          <SortableList items={tabs} onSortEnd={this.onSortEnd.bind(this)} axis='xy'>
          </SortableList>
        </SavedLinks>
      </Container>
    );
  }
}

const workspaceSelector = createSelector(
  state => state.workspaces,
  workspaces => workspaces,
);

const mapStateToProps = createSelector(
  workspaceSelector,
  workspaces => ({
    workspaces
  }),
);

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    switchWorkspaces: switchWorkspaces,
    addWorkspace: addWorkspace,
    addOneTab: addOneTab,
    renameWorkspace: renameWorkspace,
    removeSelectedTab: removeSelectedTab,
    handleDragDashBoardTab: handleDragDashBoardTab,
    handleOpenDashBoard: handleOpenDashBoard
  }, dispatch);
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const removeCurrent = (obj, prop) => {
    let {[prop]: omit, ...res} = obj;
    return res;
  };

  const withoutCurrent = Object.entries(removeCurrent(stateProps.workspaces, 'current'));
  const { current, ...withoutCurrentObj} = stateProps.workspaces;
  return Object.assign({}, ownProps, {
    current: stateProps.workspaces.current,
    tabs: stateProps.workspaces[stateProps.workspaces.current].tabs,
    active: stateProps.workspaces[stateProps.workspaces.current].active,
    workspaces: withoutCurrent,
    workspacestemp: withoutCurrentObj,
    switchWorkspaces: arg => dispatchProps.switchWorkspaces(arg),
    addWorkspace: arg => dispatchProps.addWorkspace(arg),
    renameWorkspace: arg => dispatchProps.renameWorkspace(arg),
    addOneTab: arg => dispatchProps.addOneTab(arg),
    removeSelectedTab: arg => dispatchProps.removeSelectedTab(arg),
    handleDragDashBoardTab: arg => dispatchProps.handleDragDashBoardTab(arg),
    handleOpenDashBoard: arg => dispatchProps.handleOpenDashBoard(arg)
  });
};

export default connect(mapStateToProps, mapActionsToProps, mergeProps)(Dashboard);
