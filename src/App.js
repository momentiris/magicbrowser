import React, { Component,  } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPeople } from './actions/user-actions';
import { bindActionCreators } from 'redux';

import { createSelector } from 'reselect';

import TabContainer from './TabContainer/TabContainer';
const electron = window.electron;
const { ipcRenderer } = electron;



ipcRenderer.send('update-notify-value', 'test');

ipcRenderer.on('targetPriceVal', function (event, arg) {
  console.log(arg);
});


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
        <TabContainer></TabContainer>
        <button onClick={this.clickHandler}></button>
        <webview ref={this.myRef}  source="https://www.tutorialspoint.com/" style={{width: 400, height: 400}}/>


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
