import React, { Component,  } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TabHandler from './Tabs/TabHandler';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';

import GuestInstance from'./GuestInstance/GuestInstanceHandler';
import NavigationHandler from './Navigation/NavigationHandler';

import UrlBar from './Url/UrlBar';
import Webview from './GuestInstance/Webview';
import WorkspaceHandler from './Workspace/WorkspaceHandler';
const electron = window.electron;
const { ipcRenderer } = electron;

class App extends Component {
  componentDidMount() {

  }

  handleWebview = () => {
    console.log('hej');
  }
  clickHandler = () => {
    this.props.fetchPeople();
  };

  render() {
    return (
      <div className="App">
        <WorkspaceHandler />
        <NavigationHandler/>
        <GuestInstance />
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
