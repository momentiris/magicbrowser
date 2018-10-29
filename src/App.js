import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const electron = window.electron;
const { ipcRenderer } = electron;
//
// const TabGroup = require('electron-tabs');
//
// const dragula = require('dragula');
ipcRenderer.send('update-notify-value', 'test');

ipcRenderer.on('targetPriceVal', function (event, arg) {
  console.log(arg);
});


class App extends Component {
  componentDidMount() {
//     var tabGroup = new TabGroup({
//     ready: function (tabGroup) {
//         dragula([tabGroup.tabContainer], {
//             direction: "horizontal"
//         });
//     }
// });
//     let tab = tabGroup.addTab({
//         title: "Electron",
//         src: "http://electron.atom.io",
//         visible: true
//     });
//     let tab2 = tabGroup.addTab({
//         title: "Electron",
//         src: "http://electron.atom.io",
//         visible: true
//     });
//     let tab4 = tabGroup.addTab({
//         title: 'Home',
//         src: './app.html',
//         webviewAttributes: {
//             'nodeintegration': true
//         },
//         icon: 'fa fa-home',
//         visible: true,
//         closable: false,
//         active: true,
//         ready: tab => {
//             // Open dev tools for webview
//             let webview = tab.webview;
//             if (!!webview) {
//                 webview.addEventListener('dom-ready', () => {
//                     webview.openDevTools();
//                 })
//             }
//         }
//     });
    // require('./TABS/main.js');
  }

  render() {

    return (
      <div className="App">
        <Link to="/test">route me!</Link>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    products: state.products,
    user: state.user,
    api: state.results,
    userPlusProps : `${state.user} ${props.randomProps}`
  };
};

const mapActionsToProps = {

};

export default connect(mapStateToProps, mapActionsToProps)(App);
