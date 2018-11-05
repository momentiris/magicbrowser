import React, { Component, Fragment } from 'react';
import Webview from './Webview';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import { webviewEvents } from './webviewEvents';
import { addOneTab } from '../Workspace/actions';

class GuestInstanceHandler extends Component {
  constructor(props) {
    super(props);
    this.views = React.createRef();
  }

  componentDidMount() {
    console.log(this.views.current);
  }

  eventHandlers = {
    onDomReady: e => {
      console.log(e.target.getWebContents());
    },

    onWillNavigate: e => {
      this.props.addOneTab({src: e.url});
    }
  }

  addEvents = webview => {
    Object.entries(webviewEvents).forEach(inst => {
      webview.addEventListener(inst[0], this.eventHandlers[inst[1]]);
    });
  }

  removeEvents = webview => {
    Object.entries(webviewEvents).forEach(inst => {
      webview.removeEventListener(inst[0], this.eventHandlers[inst[1]]);
    });
  }

  render() {
    const tabs = this.props.tabs;

    return (
      <div>
        {tabs.map((tab, i) => <Webview id={i} key={i} addEvents={this.addEvents} removeEvents={this.removeEvents} src={tab.src} style={{width: '100%', height: '100%'}}></Webview>)}

      </div>
    );
  }
}

const tabsSelector = createSelector(
  state => state.workspaces,
  workspaces => workspaces
);

const mapStateToProps = createSelector(
  tabsSelector,
  workspaces => ({
    workspaces
  })
);

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    addOneTab: addOneTab,
  }, dispatch);
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, {
    tabs: stateProps.workspaces[stateProps.workspaces.current].tabs,
    addOneTab: arg => dispatchProps.addOneTab(arg),
  });
};


export default connect(mapStateToProps, mapActionsToProps, mergeProps)(GuestInstanceHandler);
