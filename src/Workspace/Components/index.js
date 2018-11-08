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
  NewWsHover,
  AddNewWs,
  Input,
  CreateButton,
  CancelButton,
  NewWsButton,
  AnimateForm,
  SavedLinks,
  TabLength,
  ColorBox,
  ColorItem,
  RightArrow,
  RightArrowNewWs,
  LeftArrow,
  Add,
  AddNewTab,
  AddBig,
} from './styles';

import {
  addWorkspace,
  switchWorkspaces,
  initEmptyWorkspace,
  addOneTab,
} from '../actions';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      workspaceToggle: false,
      workspacename: 'Change me',
      isActive: true,
    };
  }

  componentDidMount(){
  }

  onToggle = () => {
    this.setState({ workspaceToggle: !this.state.workspaceToggle });
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
    // this.setState({ toggle: !this.state.toggle });
  }

  handleInputChange = e => {
    this.setState({ workspacename: e.target.value });
  }

  addOneTab = (e) => {
    this.props.addOneTab({src: 'http://facebook.com'});
  }

  // TODO: Move the Button and hover to own components, to make different states
  //       More styling
  //       fix the flex-wrap correct

  render() {
    const tabs = this.props.tabs;
    const tabsLength = this.props.tabs.map((item, i) => <Fragment>{item}</Fragment>).length;
    const workspaces = [].concat(this.props.workspaces).sort((a, b) => a.item - b.item);
    return (
      <Container>
        <AddNewWs>
          <NewWsButton><LeftArrow />Back</NewWsButton>
          <br />
          <NewWsButton onClick={this.onToggle}><Add isActive={this.state.workspaceToggle}/>New space</NewWsButton>
          <br />
          <AnimateForm isActive={this.state.workspaceToggle}>
            <form onSubmit={this.addWorkspace} style={{height: '100%'}}>
              <NewWsHover isActive={this.state.workspaceToggle}><RightArrowNewWs /></NewWsHover>
              <Input
                onChange={this.handleInputChange}
                active={this.state.isActive}
                type="text"
                placeholder="Name your workspace"/>
              <br />
              <ColorBox>
                <ColorItem />
              </ColorBox>
              <CreateButton onClick={this.onToggle} type="submit">Create</CreateButton>
              <CancelButton onClick={this.onToggle} type="button">Cancel</CancelButton>
            </form>
          </AnimateForm>
        </AddNewWs>
        <Column>
          <Ul name="workspaces">
            {
              workspaces.map((ws, i) =>
                <Li key={i}>
                  <Button onClick={this.handleClick} value={ws}>
                    <Hover> <RightArrow /> </Hover>
                    {ws}
                  </Button>
                  <br />
                  <TabLength>{tabsLength} Tabs</TabLength>
                </Li>
              )}
          </Ul>
          <TabWrapper >
            { tabs.map((tab, i) => <TabItems id={i} key={i}> {tab.src} </TabItems> )}<AddNewTab onClick={this.addOneTab}><Add style={{margin: '0px', height: '24px', width: '24px'}}/></AddNewTab>
          </TabWrapper>
        </Column>
        <SavedLinks>
          <Ul>

          </Ul>
          <TabWrapper>
          </TabWrapper>
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
    initEmptyWorkspace: initEmptyWorkspace,
    addOneTab: addOneTab,
  }, dispatch);
};

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
    addOneTab: arg => dispatchProps.addOneTab(arg),
  });
};


export default connect(mapStateToProps, mapActionsToProps, mergeProps)(Dashboard);
