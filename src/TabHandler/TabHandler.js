import React, { Component } from 'react';
import { Mainwrap } from './styles';
import TabView from './TabView';

const TabGroup = require('electron-tabs');
const dragula = require('dragula');

class TabHandler extends Component {
  componentDidMount() {
    let tabGroup = new TabGroup({
      tabContainerSelector: '.tabber',
      buttonsContainerSelector: '.tabber',
      newTab: {
        title: 'New Tab',
        src: 'https://google.com'
      },
      ready: function (tabGroup) {
        dragula([tabGroup.tabContainer], {
          direction: 'horizontal'
        });
      }
    });


    tabGroup.addTab({
      title: 'Electron',
      src: 'https://google.se',
      visible: true,
      active: true
    });

  }


  render() {
    return (
      <TabView/>
    );
  }
}

export default TabHandler;
