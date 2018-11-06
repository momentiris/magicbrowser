import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import TabHandler from '../Tabs/TabHandler';
import {
  addWorkspace,
  switchWorkspaces,
  renameWorkspace,
  initEmptyWorkspace,
  openDashBoard
} from './actions';


class WorkspaceHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temptoggle: true,
    };
  }

  componentDidMount() {
    this.props.initEmptyWorkspace();
  }

  switchWorkspaces = value => {
    this.props.switchWorkspaces(value);
  }

  addWorkspace = e => {
    e.preventDefault();
    this.props.addWorkspace(this.state.workspacename);
  }

  renameWorkspace = e => {
    e.preventDefault();
    console.log(this.state.workspacename);
    this.props.renameWorkspace(this.state.workspacename);
  }

  handleChange = e => {
    this.switchWorkspaces(e.target.value);
  }

  handleInputChange = e => {
    this.setState({ workspacename: e.target.value });
  }

  goToDashBoard = () => {
    this.props.openDashBoard({src: 'dashboard'});
  }

  render() {

    return (
      <Fragment>
        <TabHandler></TabHandler>

        <select onChange={this.handleChange} value={this.props.current} name="workspaces">
          { this.props.workspaces.map((ws, i) => <option key={i} value={ws}>{ws}</option> )}
        </select>
        <button onClick={this.goToDashBoard}>go to dashboard</button>

        <form onSubmit={this.addWorkspace}>
          <input onChange={this.handleInputChange} type="text"/>
          <input type="submit" value="add new workspace"/>
        </form>
        <form onSubmit={this.renameWorkspace}>
          <input onChange={this.handleInputChange} type="text"/>
          <input type="submit" value="rename current workspace"/>
        </form>

      </Fragment>
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
    renameWorkspace: renameWorkspace,
    initEmptyWorkspace: initEmptyWorkspace,
    openDashBoard: openDashBoard

  }, dispatch);
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const withoutCurrent = Object.keys(stateProps.workspaces).filter(inst => inst !== 'current');

  return Object.assign({}, ownProps, {
    current: stateProps.workspaces.current,
    workspaces: withoutCurrent,
    addWorkspace: arg => dispatchProps.addWorkspace(arg),
    renameWorkspace: arg => dispatchProps.renameWorkspace(arg),
    switchWorkspaces: arg => dispatchProps.switchWorkspaces(arg),
    initEmptyWorkspace: () => dispatchProps.initEmptyWorkspace(),
    openDashBoard: () => dispatchProps.openDashBoard()
  });
};

export default connect(mapStateToProps, mapActionsToProps, mergeProps)(WorkspaceHandler);