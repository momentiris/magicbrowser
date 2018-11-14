import React, { Component, Fragment } from 'react';
import WsColor from '../WsColors/';
// Style
import {
  Container,
  TabItems,
  TabWrapper,
  Column,
  Header2,
  BorderBottom,
  AddNewTab,
  AddNewWs,
  NewWsButton,
  LeftArrow,
  Add,
  AnimateForm,
  NewWsHover,
  RightArrowNewWs,
  Input,
  CreateButton,
  CancelButton,
  WorkspaceInfo,
  WorkspaceInfoWrapper,
  InfoHover,
  AddIcon,
} from './styles';
// ReducerActions
import {
  initEmptyWorkspace,
  addOneTab,
  removeSelectedTab,
  handleDragDashBoardTab,
  renameWorkspace,
} from '../../actions';
// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import { handleOpenDashBoard } from '../../actions';

class ActiveDashboard extends Component {
  constructor(props) {
    super(props);
    this.workspaceInput = React.createRef();
    this.state = {
      toggle: false,
      toggleRename: false,
      workspaceToggle: false,
      editWorkspaceToggle: {
        active: false,
        id: '',
      },
      isActive: true,
      wsButtonColor: '',
      newWorkspace: {
        name: '',
        color: ''
      },
      tabs: this.props.tabs
    };
  }
  componentDidMount(){
  }

  handleClick = e => {
    this.props.handleOpenDashBoard({
      id: false
    });
  }
  onToggle = () => {
    this.setState({ workspaceToggle: !this.state.workspaceToggle });
    this.workspaceInput.current.focus();
  }

  handleInputChange = e => {
    this.setState({
      renameworkspace: e.target.value,
      workspacename: e.target.value,
      newWorkspace: {
        name: e.target.value,
        color: this.state.newWorkspace.color,
      }
    });
  }


  render() {
    const { tabs, workspaces } = this.props;
    return (
      <Container>
        <AddNewWs>
          <NewWsButton onClick={this.handleClick}>
            <LeftArrow />Manage all workspaces
          </NewWsButton>
          <br />
        </AddNewWs>
        <Column>
          {
            workspaces.map((ws, i) =>
              <BorderBottom key={i}>
                <Header2
                  key={i}
                >
                  {ws[0]}
                </Header2>
                <WorkspaceInfoWrapper>
                  <InfoHover><WorkspaceInfo>Tabs</WorkspaceInfo></InfoHover>
                  <InfoHover><WorkspaceInfo>Saved Links</WorkspaceInfo></InfoHover>
                  <InfoHover><WorkspaceInfo>History</WorkspaceInfo></InfoHover>
                </WorkspaceInfoWrapper>
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
            <AddNewTab>
              <AddIcon />
            </AddNewTab>
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
    renameWorkspace: arg => dispatchProps.renameWorkspace(arg),
    addOneTab: arg => dispatchProps.addOneTab(arg),
    removeSelectedTab: arg => dispatchProps.removeSelectedTab(arg),
    handleDragDashBoardTab: arg => dispatchProps.handleDragDashBoardTab(arg),
    handleOpenDashBoard: arg => dispatchProps.handleOpenDashBoard(arg)
  });
};

export default connect(mapStateToProps, mapActionsToProps, mergeProps)(ActiveDashboard);
