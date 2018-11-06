import React, { Component } from 'react';
import {
  WebviewContainer,

} from './styles';

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


  componentWillUnmount() {
    const { current } = this.elem;
    this.props.removeEvents(current);
  }
  handleFocus = e => {
    console.log(e);
  }


  render() {
    const { isActive } = this.props;

    return (
      <WebviewContainer isActive={isActive}>
        <webview ref={this.elem} autosize="on" style={{border: 'none', width: '100%', height: '90%', top: 0, right: 0, left: 0, bottom: 0}} src={this.props.src || 'https://google.se'} />
      </WebviewContainer>
    );
  }
}


export default Webview;
