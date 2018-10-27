import React, { Component } from 'react';
import { Main__wrap } from './styles';



class TabContainer extends Component {
  componentDidMount() {
    const webview = document.querySelector('webview')
    console.log(webview);
    webview.addEventListener('DOMContentLoaded', () => {
      console.log('hej');
        webview.openDevTools();
    })
  }
  render() {
    return (
      <Main__wrap>Hej</Main__wrap>
    );
  }
}

export default TabContainer;
