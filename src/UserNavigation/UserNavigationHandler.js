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

  constructor(props) {
    super(props);

  }
  componentDidMount() {

  }

  navigateForwards = webview => {

  };

  navigateBackwards = webview => {

  };

  navigateToUrl = url => {

  };

  updateWebview = webview => {

  };

  render() {

    return (
      <Fragment>
        <UrlBar />
      </Fragment>
    );
  }

}

export default NavigationHandler;
