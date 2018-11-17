import React, { Component, Fragment } from 'react';
import Webview from './Webview';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import { webviewEvents } from './webviewEvents';
import { addOneTab, updateTabMeta } from '../Workspace/actions';
import DashboardHandler from '../Dashboard/DashboardHandler';

import {
  WebviewContainerWrap,
  DashboardWrap
} from './styles';

class GuestInstanceHandler extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {


  }

  eventHandlers = {
    onDomReady: ({ target, target: { dataset: { id } } }) => {

      const currentSrc = target.dataset.oldsrc;
      const currentTitle = target.dataset.title;
      const src = target.getURL();
      const title = target.getTitle();

      if (currentSrc !== src) {
        this.props.updateTabMeta({
          type: 'src',
          data: src,
          id
        });

      }
      if (currentTitle !== title) {
        this.props.updateTabMeta({
          type: 'title',
          data: title,
          id
        });
      }
      // target.removeEventListener('dom-ready', this.eventHandlers.onDomReady);
    },

    onWillNavigate: e => {
      // this.props.addOneTab({src: e.url});
      e.target.loadURL(e.url);
    },

    onPageFaviconUpdated: ({ favicons, target, target: { dataset: { id } }}) => {
      const currentFavicon = target.dataset.favicon;
      if (currentFavicon === favicons[0]) return;
      this.props.updateTabMeta({
        type: 'favicon',
        data: favicons[0],
        id
      });
      // target.removeEventListener('page-favicon-updated', this.eventHandlers.onPageFaviconUpdated);
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
    const { tabs, active } = this.props;
    return (
      <WebviewContainerWrap className="webviewContainerWrap">
        {
          tabs.map((tab, i) => {

            return tab.src !== 'dashboard' ? (
              <Webview
                favicon={tab.favicon}
                title={tab.title}
                oldSource={tab.src}
                id={i}
                isActive={i === active}
                key={i}
                addEvents={this.addEvents}
                removeEvents={this.removeEvents}
                src={tab.src}
              />
            ) : (
              <DashboardWrap className="dashboardWrap" isActive={i === active } key={i}>
                <DashboardHandler id={i}/>
              </DashboardWrap>
            );
          })
        }
      </WebviewContainerWrap>
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
    updateTabMeta: updateTabMeta,
  }, dispatch);
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, {
    tabs: stateProps.workspaces[stateProps.workspaces.current].tabs,
    active: stateProps.workspaces[stateProps.workspaces.current].active,
    addOneTab: arg => dispatchProps.addOneTab(arg),
    updateTabMeta: arg => dispatchProps.updateTabMeta(arg),
    workspaces: stateProps.workspaces

  });
};


export default connect(mapStateToProps, mapActionsToProps, mergeProps)(GuestInstanceHandler);
