import React, { Component, Fragment } from 'react';
import Webview from './Webview';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';

class GuestInstanceSpawner extends Component {
  constructor(props){
    super(props);

  }



  componentDidMount() {
  }

  render() {
    const tabs = this.props.tabs;
    return (
      <div>
        {tabs.map((tab, i) => <Webview key={i}> {tab} </Webview>)}
      </div>
    );
  }

}

const tabsSelector = createSelector(
  state => state.tabs,
  tabs => tabs,
);


const mapStateToProps = createSelector(
  tabsSelector,
  tabs => ({
    tabs
  })
);

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, {
    tabs: stateProps.tabs,
  });
};

export default connect(mapStateToProps, null, mergeProps)(GuestInstanceSpawner);
