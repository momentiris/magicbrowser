import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class UrlBar extends Component {


handleChange = (e) => {
  this.props.handleSearch(e.target.value);
};

render() {
  return (
    <div>
      <input onKeyUp={this.handleChange} type="text" />
    </div>
  );
}
}

export default UrlBar;
