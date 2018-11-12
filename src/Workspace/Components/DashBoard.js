import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import WsColor from './WsColors/';
// import Drop from './droppable/Droppable.js';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
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
  AddNewTab,
  Close,
  SavedLinksHeader,
  SavedLinksWrapper,
  RenameEdit,
} from './styles';


import {
  addWorkspace,
  switchWorkspaces,
  initEmptyWorkspace,
  addOneTab,
  removeSelectedTab
} from '../actions';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.workspaceInput = React.createRef();
    this.onToggle = this.onToggle.bind(this);
    this.state = {
      toggle: false,
      workspaceToggle: false,
      editWorkspaceToggle: false,
      isActive: true,
      wsButtonColor: '',
      newWorkspace: {
        name: '',
        color: ''
      },
      draggableId: 'task-1',
      type: 'TYPE',
      reason: 'DROP',
      source: {
        droppableId: 'column-1',
        index: 0,
      },
      destination: {
        droppableId: 'column-1',
        index: 1,
      },
    };
  }

  onDragStart = (e) => {

  };
  onDragUpdate = () => {

  };
  onDragEnd = (result) => {
    // const { destination, source, draggableId } = result;
    //
    // if (!destination) {
    //   return;
    // }
    //
    // if (
    //   destination.droppableId === source.droppableId && destination.index === source.index
    // ) {
    //   return;
    // }
    //
    // const column = this.state.columns[source.droppableId];
    // const newTaskIds = Array.from(column.taskIds);
    // newTaskIds.splice(source.index, 1);
    // newTaskIds.splice(destination.index, 0, draggableId);
    //
    // const newColumn = {
    //   ...column,
    //   taskIds: newTaskIds,
    // };
    // const newState = {
    //   ...this.state,
    //   columns: {
    //     ...this.state.column,
    //   }
    // };
  };


  componentDidMount(){
    console.log(this.props.tabs[0]);
  }

  onToggle = () => {
    this.setState({ workspaceToggle: !this.state.workspaceToggle });
    // this.workspaceInput.focus();
    this.workspaceInput.current.focus();
  }

  editWorkspace = (e) => {
    console.log(e.target.value);
    this.switchWorkspaces(e.target.value);
    // this.setState({ editWorkspaceToggle: !this.state.editWorkspaceToggle });
  }

  switchWorkspaces = value => {
    this.props.switchWorkspaces(value);
  }

  handleClick = (e) => {
    console.log(e.target.value);
    this.switchWorkspaces(e.target.value);
  }

  addWorkspace = e => {
    e.preventDefault();
    this.props.addWorkspace(this.state.newWorkspace);
    // this.setState({ toggle: !this.state.toggle });
  }

  handleInputChange = e => {
    console.log(e.target.value);
    this.setState({
      workspacename: e.target.value,
      newWorkspace: {
        name: e.target.value,
        color: this.state.newWorkspace.color,
      }
    });
  }

  addOneTab = (e) => {
    this.props.addOneTab({src: 'http://facebook.com'});
  }

  removeSelectedTab = id => {
    this.props.removeSelectedTab(id);
    console.log(this.props.removeSelectedTab);
  }

  updateWsColor = (color) => {
    this.setState({
      wsButtonColor: color,
      newWorkspace: {
        color: color,
        name: this.state.newWorkspace.name
      }
    });
    console.log(color);
  }

  // TODO: Move the Button and hover to own components, to make different states
  //       Drag n' drop the individual tab.
  //       complete the edit/rename workspace dropdown

  render() {
    const { tabs } = this.props;
    // const dragable = tabs.map((tab, i) => );
    const { workspaces } = this.props;
    return (
      <Container>
        <AddNewWs>
          <NewWsButton>
            <LeftArrow />Back
          </NewWsButton>
          <br />
          <NewWsButton onClick={this.onToggle}>
            <Add isActive={this.state.workspaceToggle}/>New space
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
        </AddNewWs>
        <Column>
          <Ul name="workspaces">
            {
              workspaces.map((ws, i) => (
                <Li key={i}>
                  <Button onClick={this.handleClick} value={ws[0]}>
                    <Hover color={ws[1].color || '#5C4EFF'}> <RightArrow /> </Hover>
                    {ws[0]}
                  </Button>
                  <RenameEdit type="button" onClick={this.editWorkspace} value={ws[0]} />
                  <AnimateForm isActive={this.state.editWorkspaceToggle}>
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
                      <CreateButton onClick={this.onToggle} type="submit">Save</CreateButton>
                      <CancelButton onClick={this.onToggle} type="button">Cancel</CancelButton>
                    </form>
                  </AnimateForm>
                  <br />
                  <TabLength>
                    {`${ws[1].tabs.length} ${ws[1].tabs.length > 1 ? 'Tabs' : 'Tab'}`}
                  </TabLength>
                </Li>
              ))
            }
          </Ul>
          <TabWrapper>
            <DragDropContext
              onDragEnd={this.onDragEnd}
            >
              {
                tabs.map((tab, i) =>
                  <Droppable droppableId={JSON.stringify(i)} key={i}>
                    {provided => (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                        <Draggable draggableId={JSON.stringify(i)} key={i}>
                          {provided => (
                            <TabItems
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                              id={i}
                              key={i}
                              draggableId={JSON.stringify(i)}>
                              {tab.src}
                              <Close onClick={() => this.removeSelectedTab(i)} />
                            </TabItems>
                          )}
                        </Draggable>
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                )
              }
            </DragDropContext>
            <AddNewTab onClick={this.addOneTab}>
              <Add style={{margin: '0px', height: '35px', width: '35px',}}/>
            </AddNewTab>
          </TabWrapper>
        </Column>
        <SavedLinks>
          <Column>
            <SavedLinksWrapper>
              <SavedLinksHeader>
              </SavedLinksHeader>
            </SavedLinksWrapper>
          </Column>
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
    removeSelectedTab: removeSelectedTab,
  }, dispatch);
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const removeCurrent = (obj, prop) => {
    let {[prop]: omit, ...res} = obj;
    return res;
  };

  const withoutCurrent = Object.entries(removeCurrent(stateProps.workspaces, 'current'));

  return Object.assign({}, ownProps, {
    current: stateProps.workspaces.current,
    tabs: stateProps.workspaces[stateProps.workspaces.current].tabs,
    workspaces: withoutCurrent,
    switchWorkspaces: arg => dispatchProps.switchWorkspaces(arg),
    addWorkspace: arg => dispatchProps.addWorkspace(arg),
    renameWorkspace: arg => dispatchProps.renameWorkspace(arg),
    addOneTab: arg => dispatchProps.addOneTab(arg),
    removeSelectedTab: arg => dispatchProps.removeSelectedTab(arg),
  });
};

// {
//   tabs.map((tab, i) =>
//     <DragDropContext onDragEnd={this.onDragEnd} key={i}>
//       <Droppable droppableId={dragable}>
//         {provided => (
//           <div
//             ref={provided.innerRef}
//             {...provided.droppableProps}
//           >
//             <Draggable draggableId={dragable} index={i}>
//               {(provided) => (
//                 <div
//                   {...provided.draggableProps}
//                   {...provided.dragHandleProps}
//                   ref={provided.innerRed}
//                   id={i}
//                   index={i}
//                   key={i}>
//                   {tab.src}
//                   <button onClick={() => this.removeSelectedTab(i)} />
//                 </div>
//               )}
//             </Draggable>
//           )}
//             {provided.placeholder}
//           </div >
//         )}
//       </Droppable>
//     </DragDropContext>
//   )
// }

export default connect(mapStateToProps, mapActionsToProps, mergeProps)(Dashboard);
