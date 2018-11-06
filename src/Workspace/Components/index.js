import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import { Container, Column, Ul, Li, ItemLink, Ua, UaHeader, WsItems, WsWrapper } from './styles';
import {
  addWorkspace,
  switchWorkspaces
} from '../actions';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.tabs[1]);
  }


  switchWorkspaces = value => {
    this.props.switchWorkspaces(value);
  }

  handleClick = (e) => {
    this.switchWorkspaces(e.target.value);
  }

  // TODO: fix the error with swapping between workspaces
  //       More styling
  //       fix the flex-wrap correct

  render() {
    const tabs = this.props.tabs;
    const workspaces = this.props.workspaces;
    return (
      <Container>
        <Ua>
          <UaHeader>Back</UaHeader>
          <UaHeader>New space</UaHeader>
        </Ua>
        <Column>
          <Ul name="workspaces">

            { workspaces.map((ws, i) => <Li key={i} value={ws} > <button onClick={this.handleClick}>{ws}</button></Li> )}
          </Ul>
          <WsWrapper >
            { tabs.map((tab, i) => <WsItems id={i} key={i}> {tab.src} </WsItems> )}
          </WsWrapper>
        </Column>
        <hr></hr>
        <Column>
          <Ul>
            { workspaces.map((ws, i) => <Li key={i} value={ws}> <ItemLink to='/'> {ws} </ItemLink> </Li> )}
          </Ul>
          <WsWrapper>
            <WsItems></WsItems>
            <WsItems></WsItems>
            <WsItems></WsItems>
            <WsItems></WsItems>
            <WsItems></WsItems>
            <WsItems></WsItems>
            <WsItems></WsItems>
          </WsWrapper>
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
  });
};


export default connect(mapStateToProps, mapActionsToProps, mergeProps)(Dashboard);
