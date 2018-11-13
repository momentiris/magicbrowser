import React, { Component, Fragment } from 'react';
import { Container, TabItems, TabWrapper, Column, Header2, BorderBottom, AddNewTab } from './styles';
import {
  addWorkspace,
  switchWorkspaces,
  initEmptyWorkspace,
  addOneTab,
  removeSelectedTab,
  handleDragDashBoardTab,
  renameWorkspace,
} from '../../actions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import { handleOpenDashBoard } from '../../actions';

class ActiveDashboard extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    console.log(this.props);
  }

  handleClick = e => {
    this.props.handleOpenDashBoard({
      id: false
    })
  }


  render() {
    const { tabs, workspaces } = this.props;
    return (
      <Container>
        <button onClick={this.handleClick}>all workspaces</button>
        <Column>
          {
            workspaces.map((ws, i) =>
              <BorderBottom key={i}>
                <Header2

                >
                  {ws[0]}
                </Header2>
              </BorderBottom>
            )
          }
          <TabWrapper>
            {
              tabs.map((tab, i) =>
                <TabItems
                  key={i}
                  id={i}
                >
                  {tab.src}
                </TabItems>
              )
            }
            <AddNewTab />
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
    renameWorkspace: renameWorkspace,
    removeSelectedTab: removeSelectedTab,
    handleDragDashBoardTab: handleDragDashBoardTab,
    handleOpenDashBoard: handleOpenDashBoard
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
    active: stateProps.workspaces[stateProps.workspaces.current].active,
    workspaces: withoutCurrent,
    switchWorkspaces: arg => dispatchProps.switchWorkspaces(arg),
    addWorkspace: arg => dispatchProps.addWorkspace(arg),
    renameWorkspace: arg => dispatchProps.renameWorkspace(arg),
    addOneTab: arg => dispatchProps.addOneTab(arg),
    removeSelectedTab: arg => dispatchProps.removeSelectedTab(arg),
    handleDragDashBoardTab: arg => dispatchProps.handleDragDashBoardTab(arg),
    handleOpenDashBoard: arg => dispatchProps.handleOpenDashBoard(arg)
  });
};

export default connect(mapStateToProps, mapActionsToProps, mergeProps)(ActiveDashboard);
