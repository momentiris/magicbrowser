import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import GuestInstance from'../GuestInstance/GuestInstanceHandler';
import TabHandler from '../TabHandler/TabHandler';

class WorkspaceHandler extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
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

const workspaceSelector = createSelector(
  state => state.workspaces,
  workspaces => workspaces,
);


const mapStateToProps = createSelector(
  workspaceSelector,
  workspaces => ({
    workspaces
  })
);

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    switchWorkspaces: () => console.log('switchWorkspaces inside mapactionstoprops'),
  }, dispatch);
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, {
    workspaces: stateProps.workspaces,
    switchWorkspaces: arg => dispatchProps.switchWorkspaces(arg),
  });
};

export default connect(mapStateToProps, mapActionsToProps, mergeProps)(WorkspaceHandler);
