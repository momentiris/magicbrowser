import React, { Component,  } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TabHandler from './Tabs/TabHandler';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserNavigationHandler from './UserNavigation/UserNavigationHandler';
import Webview from './GuestInstance/Webview';
import GuestInstanceHandler from './GuestInstance/GuestInstanceHandler';
import Dashboard from './Workspace/Components/DashBoard';
import ActiveDashboard from './Workspace/Components/ActiveDashboard/ActiveDashboard';
import styled from 'styled-components';

const electron = window.electron;
const { ipcRenderer } = electron;

const MainNavWrap = styled.section`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

const MainNavWrapPlaceholder = styled.div`
  height: 79px;
  width: 100%;
`


class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
        <>
        <MainNavWrapPlaceholder/>
        <MainNavWrap>
          <TabHandler />
          <UserNavigationHandler />
        </MainNavWrap>
          <Route exact path="/" component={GuestInstanceHandler}/>
        </>
        </Router>
      </div>
    );
  }
}

const userSelector = createSelector(
  state => state.people,
  people => people
);

const mapStateToProps = createSelector(
  userSelector,
  people => ({
    people,
  })
);

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({

  }, dispatch);
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, {
    people: stateProps.people,

  });
};


export default connect(mapStateToProps, mapActionsToProps, mergeProps)(App);
