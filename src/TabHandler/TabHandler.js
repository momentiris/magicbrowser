import React, { Component, Fragment } from 'react';
import { Mainwrap } from './styles';
import TabView from './TabView';

const TabGroup = require('electron-tabs');
const dragula = require('dragula');

class TabHandler extends Component {
  constructor(props) {
    super(props);
    this.tabGroup = {};
  }

  componentDidMount() {
    this.initTabs();
  }

  initTabs = () => {
    this.tabGroup = new TabGroup({
      tabContainerSelector: '.tabber',

      ready: function (tabGroup) {
        dragula([tabGroup.tabContainer], {
          direction: 'horizontal'
        });
      }
    });

    this.addTab('https://facebook.com', true, true);
  }

  registerTabGroupEventHandlers = () => {
    this.tabGroup.on('tab-added', (tab, tabGroup) => {
      console.log('tab added');
    });

    this.tabGroup.on('tab-active', (tab, tabGroup) => {
      console.log('active tab: ' + tab);
    });
  }

  registerSingleTabEventHandlers = () => {

  }

  registerWebviewEventHandlers = tab => {
    tab.webview.addEventListener('dom-ready', () => {
      const foreignTitle = tab.webview.getTitle();
      tab.setTitle(foreignTitle);
    });

    tab.webview.addEventListener('page-favicon-updated', ({ favicons }) => {
      tab.setIcon(favicons[0]);
    });
  }

  goToWorkspace = () => {
    let tab = this.tabGroup.addTab({
      title: 'ok',
      src: 'http://localhost:3000/workspace',
      visible: true,
      active: true,
      webviewAttributes: {
        'nodeintegration': true
      },
      ready: tab => {
        let webview = tab.webview;
        if (!!webview) {
          this.registerWebviewEventHandlers(tab);
        }
      }
    });
  }

  addTab = (src = 'http://google.se', visible = true, active = false) => {
    let tab = this.tabGroup.addTab({
      title: '',
      src: src,
      visible: visible,
      active: active,
      ready: tab => {
        let webview = tab.webview;
        if (!!webview) {
          this.registerWebviewEventHandlers(tab);
        }
      }
    });
  }

  changeUrl = () => {
    const current = this.tabGroup.getActiveTab();
    current.webview.loadURL('https://momentiris.github.io');
  }

  render() {
    return (
      <Fragment>
        <TabView/>
        <button onClick={() => this.addTab()}/>
        <button onClick={this.changeUrl}/>
        <button onClick={this.goToWorkspace}>workpace</button>
      </Fragment>
    );
  }
}

export default TabHandler;
