import React, { Component,  } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const electron = window.electron;
// const { ipcRenderer } = electron;
const ipcRenderer = electron.ipcRenderer;
const TabGroup = require('electron-tabs');

const dragula = require('dragula');


// ipcRenderer.send('update-notify-value', 'test');
//
// ipcRenderer.on('targetPriceVal', function (event, arg) {
//   console.log(arg);
// });


class App extends Component {
  componentDidMount() {

  }


  handleWebview = () => {
    console.log('hej');
  }
  clickHandler = () => {
    this.props.fetchPeople();
  };

  render() {
    return (
      <div className="App">
        <TabHandler/>


        <div className="etabs-views"></div>
        <button onClick={this.clickHandler}></button>

        <Link to="/test">route me!</Link>

      </div>
    );
  }
}

const userSelector = createSelector(
  state => state.people,
  people => people
);

const mapStateToProps = createSelector(
  userSelector,
  people => ({
    people,
  })
);

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    fetchPeople: fetchPeople,
  }, dispatch);
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, {
    people: stateProps.people,
    fetchPeople: () => dispatchProps.fetchPeople()
  });
};


export default connect(mapStateToProps, mapActionsToProps, mergeProps)(App);
