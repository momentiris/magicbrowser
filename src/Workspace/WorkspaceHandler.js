import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import TabHandler from '../Tabs/TabHandler';
import WorkspaceNavUI from './WorkspaceNavUI';
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

  }

  componentDidMount() {
    this.props.initEmptyWorkspace();
  }

  switchWorkspaces = value => {
    console.log(value);
    this.props.switchWorkspaces(value);
  }

  addWorkspace = ws => {
    this.props.addWorkspace(ws);
  }

  renameWorkspace = e => {
    e.preventDefault();

    this.props.renameWorkspace(this.state.workspacename);
  }

  handleChange = e => {
    this.switchWorkspaces(e.target.value);
  }

  handleInputChange = e => {
    this.setState({ workspacename: e.target.value });
  }

  goToDashboard = () => {
    this.props.openDashBoard({src: 'dashboard'});
  }

  // <select onChange={this.handleChange} value={this.props.current} name="workspaces">
  // { this.props.workspaces.map((ws, i) => <option key={i} value={ws}>{ws}</option> )}
  // </select>
  // <button onClick={this.goToDashBoard}>go to dashboard</button>
  //
  // <form onSubmit={this.addWorkspace}>
  // <input onChange={this.handleInputChange} type="text"/>
  // <input type="submit" value="add new workspace"/>
  // </form>
  // <form onSubmit={this.renameWorkspace}>
  // <input onChange={this.handleInputChange} type="text"/>
  // <input type="submit" value="rename current workspace"/>
  // </form>
  render() {
    const { workspaces, current } = this.props;
    return (
      <WorkspaceNavUI
        goToDashboard={this.goToDashboard}
        workspaces={workspaces}
        current={current}
        switchWorkspaces={this.switchWorkspaces}
        addWorkspace={this.addWorkspace}
      />
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
  // const withoutCurrent = Object.keys(stateProps.workspaces).filter(inst => inst !== 'current');

  const removeCurrent = (obj, prop) => {
    let {[prop]: omit, ...res} = obj;
    return res;
  };

  const withoutCurrent = Object.entries(removeCurrent(stateProps.workspaces, 'current'));
  return Object.assign({}, ownProps, {
    current: stateProps.workspaces.current,
    workspaces: withoutCurrent.reverse(),
    addWorkspace: arg => dispatchProps.addWorkspace(arg),
    renameWorkspace: arg => dispatchProps.renameWorkspace(arg),
    switchWorkspaces: arg => dispatchProps.switchWorkspaces(arg),
    initEmptyWorkspace: () => dispatchProps.initEmptyWorkspace(),
    openDashBoard: () => dispatchProps.openDashBoard()
  });
};

export default connect(mapStateToProps, mapActionsToProps, mergeProps)(WorkspaceHandler);
