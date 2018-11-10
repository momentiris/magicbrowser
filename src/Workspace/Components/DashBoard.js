import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import WsColor from './WsColors/';
import { DragDropContext } from 'react-beautiful-dnd';
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
      }
    };
  }

  onDragStart = () => {

  };
  onDragUpdate = () => {

  };
  onDragEnd = () => {

  };


  componentDidMount(){

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
          <TabWrapper >
            {
              tabs.map((tab, i) =>
                <TabItems
                  id={i}
                  key={i}>
                  {tab.src}
                  <Close onClick={() => this.removeSelectedTab(i)} />
                </TabItems>
              )
            }
            <AddNewTab onClick={this.addOneTab}>
              <Add style={{margin: '0px', height: '35px', width: '35px',}}/>
            </AddNewTab>
          </TabWrapper>
        </Column>
        <SavedLinks>
          <Column>
            <SavedLinksWrapper>
              <SavedLinksHeader>
                Saved Links
                <DragDropContext
                  onDragStart={this.onDragStart}
                  onDragUpdate={this.onDragUpdate}
                  onDragEnd={this.onDragEnd}
                >
                  <div>Hello world</div>
                </DragDropContext>

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


export default connect(mapStateToProps, mapActionsToProps, mergeProps)(Dashboard);
