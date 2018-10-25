import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';


const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Route path="/" component={App} />
      </Fragment>
    </Router>
  </Provider>
);

export default Root;
