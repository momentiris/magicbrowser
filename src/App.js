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
  height: ${props => props.fullscreen ? '0px' : '79px'};
  transition: height 300ms ease;
  overflow: ${props => props.fullscreen ? 'hidden' : 'visible'};
`;

const MainNavWrapPlaceholder = styled.div`
  width: 100%;
  height: ${props => props.fullscreen ? '0px' : '79px'};
  transition: height 300ms ease;
  overflow: hidden;
`;

export const TempWrapper = styled.div`

`;

class App extends Component {
  state = {
    fullscreen: false,
  };

  componentDidMount() {
    this.handleToggleFullscreen();
  }

  handleToggleFullscreen = () => {
    ipcRenderer.on('togglefullscreen', (e,msg) => {
      this.setState({
        fullscreen: msg
      });
    });
  }

  render() {
    const { fullscreen } = this.state;
    return (
      <Router>
        <>
        <TempWrapper className="tempwrapper" >
          <MainNavWrapPlaceholder fullscreen={fullscreen} className="mainnavwrapplaceholder"/>
          <MainNavWrap fullscreen={fullscreen} className="mainnavwrapp">
            <TabHandler />
            <UserNavigationHandler />
          </MainNavWrap>
        </TempWrapper>
          <div className="App">
            <Route exact path="/" component={GuestInstanceHandler}/>
          </div>

        </>
      </Router>
    );
  }
}

export default App;
