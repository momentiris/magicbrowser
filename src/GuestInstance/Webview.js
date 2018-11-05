import React, { Component } from 'react';

class Webview extends Component {
  constructor(props) {
    super(props);
    this.elem = React.createRef();
  }

  componentDidMount() {

    const { current } = this.elem;

    this.props.addEvents(current);

  }

  componentWillUnmount() {
    const { current } = this.elem;
    this.props.removeEvents(current);
  }
  handleFocus = e => {
    console.log(e);
  }


  render() {
    return (
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'auto', height: '100vh'}}>
        <webview ref={this.elem} style={{width: '100%', height: '100%', top: 0, right: 0, left: 0, bottom: 0}} src={this.props.src || 'https://google.se'} />
      </div>
    );
  }
}


export default Webview;
