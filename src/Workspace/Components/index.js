import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
// import WsButton from './WorkSpaceButton/wsbutton';
// import WsHover from './WorkSpaceButton/wshover';
import {
  Container,
  Column,
  Ul,
  Li,
  ItemLink,
  Ua,
  TabItems,
  TabWrapper,
  Button,
  Hover,
  AddNewWs,
  Input,
  CreateButton,
  CancelButton
} from './styles';

import {
  addWorkspace,
  switchWorkspaces,
  initEmptyWorkspace,
} from '../actions';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.hover);
    this.state = {
      toggle: false,
      workspacename: 'Change me'
    };
  }

  componentDidMount(){
  }

  onToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  }

  switchWorkspaces = value => {
    this.props.switchWorkspaces(value);
  }

  handleClick = (e) => {
    this.switchWorkspaces(e.target.value);
  }

  addWorkspace = e => {
    e.preventDefault();
    this.props.initEmptyWorkspace();
    this.props.addWorkspace(this.state.workspacename);
    this.setState({ toggle: !this.state.toggle });
  }

  handleInputChange = e => {
    this.setState({ workspacename: e.target.value });
  }

  // TODO: Move the Button and hover to own components, to make different states
  //       More styling
  //       fix the flex-wrap correct

  render() {
    const tabs = this.props.tabs;
    const workspaces = [].concat(this.props.workspaces).sort((a, b) => a.item - b.item);
    return (
      <Container>
        <AddNewWs>
          <Button onClick={this.onToggle}>New space</Button>
          <br />
          {
            this.state.toggle ?
              <form onSubmit={this.addWorkspace}>
                <Hover />
                <Input onChange={this.handleInputChange} type="text" placeholder="Name your workspace"/>
                <br />
                <CreateButton type="submit">Create</CreateButton>
                <CancelButton>Cancel</CancelButton>
              </form>
              : null
          }
        </AddNewWs>
        <Column>
          <Ul name="workspaces">
            {
              workspaces.map((ws, i) =>
                <Li key={i}>
                  <Button onClick={this.handleClick} value={ws}>
                    <Hover />
                    {ws}
                  </Button>
                </Li>
              )}
          </Ul>
          <TabWrapper >
            { tabs.map((tab, i) => <TabItems id={i} key={i}> {tab.src} </TabItems> )}
          </TabWrapper>
        </Column>
        <hr></hr>
        <Column>
          <Ul>

          </Ul>
          <TabWrapper>
          </TabWrapper>
        </Column>
      </Container>
    );
  }
}

const workspaceSelector = createSelector(
  state => state.workspaces,
  workspaces => workspaces,
);

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    switchWorkspaces: switchWorkspaces,
    addWorkspace: addWorkspace,
    initEmptyWorkspace: initEmptyWorkspace,
  }, dispatch);
};

const mapStateToProps = createSelector(
  workspaceSelector,
  workspaces => ({
    workspaces
  }),
);


const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const withoutCurrent = Object.keys(stateProps.workspaces).filter(inst => inst !== 'current');
  return Object.assign({}, ownProps, {
    current: stateProps.workspaces.current,
    tabs: stateProps.workspaces[stateProps.workspaces.current].tabs,
    workspaces: withoutCurrent,
    switchWorkspaces: arg => dispatchProps.switchWorkspaces(arg),
    addWorkspace: arg => dispatchProps.addWorkspace(arg),
    initEmptyWorkspace: () => dispatchProps.initEmptyWorkspace(),
    renameWorkspace: arg => dispatchProps.renameWorkspace(arg),
  });
};


export default connect(mapStateToProps, mapActionsToProps, mergeProps)(Dashboard);
