import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import GuestInstance from'../GuestInstance/GuestInstanceHandler';
import TabHandler from '../TabHandler/TabHandler';
import { addWorkspace } from './actions';

class WorkspaceHandler extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.workspaces);
    this.props.addWorkspace('test');
  }
  render() {

    return (
      <Fragment>
        <TabHandler></TabHandler>
        <GuestInstance></GuestInstance>
      </Fragment>
    );
  }

}
// const tabsSelector = createSelector(
//   state => state.tabs,
//   tabs => tabs,
// );
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
    switchWorkspaces: () => console.log('switchWorkspaces inside mapactionstoprops'),
    addWorkspace: addWorkspace
  }, dispatch);
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {

  return Object.assign({}, ownProps, {
    workspaces: stateProps.workspaces,
    addWorkspace: arg => dispatchProps.addWorkspace(arg),
    switchWorkspaces: arg => dispatchProps.switchWorkspaces(arg),
  });
};

export default connect(mapStateToProps, mapActionsToProps, mergeProps)(WorkspaceHandler);
