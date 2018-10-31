import React, { Component, Fragment } from 'react';
import Webview from './Webview';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import { webviewEvents } from './webviewEvents';


class GuestInstanceHandler extends Component {

  constructor(props) {
    super(props);

  }


  eventHandlers = {
    onDomReady: e => {
      console.log(e);
    },
    onWillNavigate: e => {
      console.log(e);
    }
  }

  addEvents = webview => {
    Object.entries(webviewEvents).forEach(inst => {
      webview.addEventListener(inst[0], this.eventHandlers[inst[1]]);
    });
  }

  onDomReady = e => {
    console.log(e);
  }

  render() {
    const tabs = this.props.tabs;
    return (
      <div>
        <Webview addEvents={this.addEvents} src="http://google.se" style={{width: '100%', height: '100%'}}></Webview>

      </div>
    );
  }

}

const tabsSelector = createSelector(
  state => state.tabs,
  tabs => tabs,
);


const mapStateToProps = createSelector(
  tabsSelector,
  tabs => ({
    tabs
  })
);

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, {
    tabs: stateProps.tabs,
  });
};

export default connect(mapStateToProps, null, mergeProps)(GuestInstanceHandler);
