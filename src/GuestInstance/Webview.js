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
    if (this.props.isActive && this.src !== 'dashboard') {
      this.props.handleDashboardOpenUI({hide: false});
    }
    const { current } = this.elem;
    this.props.addEvents(current);
  }

  componentWillUnmount() {
    const { current } = this.elem;
    this.props.removeEvents(current);
  }

  render() {
    const { isActive, id, favicon, title, oldSource, src } = this.props;

    return (
      <WebviewContainer isActive={isActive}>
        <webview
          allowpopups="true"
          webpreferences="nativeWindowOpen=true"
          data-favicon={favicon}
          data-title={title}
          data-oldsrc={oldSource}
          ref={this.elem}
          data-id={id}
          autosize="on"
          style={{border: 'none', width: '100%', height: '100%', top: 0, right: 0, left: 0, bottom: 0}}
          src={src || 'https://google.se'}
        />
      </WebviewContainer>
    );
  }
}


export default Webview;
