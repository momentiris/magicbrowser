import React, { Component, Fragment } from 'react';
import Webview from './Webview';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import { webviewEvents } from './webviewEvents';
import { addOneTab } from '../TabHandler/actions';

class GuestInstanceHandler extends Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    //console.log(this.props.addOneTab);
  }


  eventHandlers = {
    onDomReady: e => {
      //console.log(e);
    },
    onWillNavigate: e => {
      //console.log(e);
      this.props.addOneTab({src: e.url});
    }
  }

  addEvents = webview => {
    Object.entries(webviewEvents).forEach(inst => {
      webview.addEventListener(inst[0], this.eventHandlers[inst[1]]);
    });
  }


  render() {
    const tabs = this.props.tabs;
    return (
      <div>
        {tabs.map((tab, i) => <Webview key={i} addEvents={this.addEvents} src="http://google.se" style={{width: '100%', height: '100%'}}></Webview>)}
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

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    addOneTab: addOneTab,
  }, dispatch);
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, {
    tabs: stateProps.tabs,
    addOneTab: arg => dispatchProps.addOneTab(arg),
  });
};

export default connect(mapStateToProps, mapActionsToProps, mergeProps)(GuestInstanceHandler);
