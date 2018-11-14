import React, { Component,  } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TabHandler from './Tabs/TabHandler';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserNavigationHandler from './UserNavigation/UserNavigationHandler';
import GuestInstanceHandler from './GuestInstance/GuestInstanceHandler';

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
`;

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

export default App;
