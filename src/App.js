import React, { Component,  } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TabHandler from './Tabs/TabHandler';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import UserNavigationHandler from './UserNavigation/UserNavigationHandler';

import UrlBar from './Url/UrlBar';
import Webview from './GuestInstance/Webview';
import WorkspaceHandler from './Workspace/WorkspaceHandler';
import GuestInstanceHandler from './GuestInstance/GuestInstanceHandler';
import Dashboard from './Workspace/Components/';

const electron = window.electron;
const { ipcRenderer } = electron;
class App extends Component {
  componentDidMount() {

  }
  // <Route exact path="/dashboard" component={Dashboard}/>

  render() {
    return (
      <div className="App">
        <Router>
        <>
        <WorkspaceHandler/>
        <UserNavigationHandler />
          <Route exact path="/" component={GuestInstanceHandler}/>
          <Route exact path="/dashboard" component={Dashboard}/>

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
