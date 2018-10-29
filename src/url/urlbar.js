import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class UrlBar extends Component {


handleChange = (e) => {
  this.props.handlesearch(e.target.value);
};

render() {
  return (
    <div>
      <input {...this.props} type="text" />
    </div>
  );
}
}

export default UrlBar;
