import React, { Component, Fragment } from 'react';
import UrlBar from '../Url/UrlBar';
import GuestInstanceHandler from '../GuestInstance/GuestInstanceHandler';

// todo:
// 1. target current webview
// change url
// change src of tab object
// navigate backward/forward
// update
class NavigationHandler extends Component {

  navigateForwards = webview => {

  }

  navigateBackwards = webview => {

  }

  navigateToUrl = url => {

  }

  render() {

    return (
      <Fragment>
        <UrlBar/>
        <GuestInstanceHandler />
      </Fragment>
    );
  }

}

export default NavigationHandler;
