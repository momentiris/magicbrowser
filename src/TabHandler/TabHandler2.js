import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';


import { Mainwrap } from './styles';
import { addOneTab } from './actions';

class TabHandler2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {
          src: 'http://google.se'
        },
        {
          src: 'http://google.se'
        },
        {
          src: 'http://google.se'
        },
      ]
    };
  }

  componentDidMount() {
  }

  addTab = () => {
    console.log('add tab please');
    this.props.addOneTab(1);
  }

  render() {
    return (
      <Fragment>
        <Mainwrap></Mainwrap>
        <button onClick={this.addTab}>Add tab</button>
      </Fragment>
    );
  }

}

const tabsSelector = createSelector(
  state => state.tabs,
  tabs => tabs
);


const mapStateToProps = createSelector(
  tabsSelector,
  tabs => ({
    tabs
  })
);

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    addOneTab: addOneTab,
  }, dispatch);
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, {
    tabs: stateProps.tabs,
    addOneTab: arg => dispatchProps.addOneTab(arg)
  });
};

export default connect(mapStateToProps, mapActionsToProps, mergeProps)(TabHandler2);
