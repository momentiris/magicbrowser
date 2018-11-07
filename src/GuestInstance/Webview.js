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

  componentWillUnmount() {
    const { current } = this.elem;
    this.props.removeEvents(current);
  }



  render() {
    const { isActive, id } = this.props;

    return (
      <WebviewContainer isActive={isActive}>
        <webview ref={this.elem} data-id={id} autosize="on" style={{border: 'none', width: '100%', height: '90%', top: 0, right: 0, left: 0, bottom: 0}} src={this.props.src || 'https://google.se'} />
      </WebviewContainer>
    );
  }
}


export default Webview;
