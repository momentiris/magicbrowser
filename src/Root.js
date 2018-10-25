import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';

import { PersistGate } from 'redux-persist/integration/react';


const Root = ({ store, persistor }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Fragment>
          <Route path="/" component={App} />
        </Fragment>
      </Router>
    </PersistGate>
  </Provider>
);

export default Root;
