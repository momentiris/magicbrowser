import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import GuestInstance from'../GuestInstance/GuestInstanceHandler';
import TabHandler from '../TabHandler/TabHandler';
import { addWorkspace, switchWorkspaces } from './actions';

class WorkspaceHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temptoggle: true,
    };
  }

  componentDidMount() {

    this.props.addWorkspace('test');
  }

  switchWorkspaces = () => {
    this.props.switchWorkspaces(this.state.temptoggle ? 'test' : 'unsavedWorkspace');
    this.setState({temptoggle: !this.state.temptoggle});
  }
  render() {

    return (
      <Fragment>
        <TabHandler></TabHandler>
        <button onClick={this.switchWorkspaces}>switch workspaces</button>
        <GuestInstance></GuestInstance>
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
    addWorkspace: addWorkspace
  }, dispatch);
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {

  return Object.assign({}, ownProps, {
    workspaces: stateProps.workspaces,
    addWorkspace: arg => dispatchProps.addWorkspace(arg),
    switchWorkspaces: arg2 => dispatchProps.switchWorkspaces(arg2),
  });
};

export default connect(mapStateToProps, mapActionsToProps, mergeProps)(WorkspaceHandler);
