import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';

import { PersistGate } from 'redux-persist/integration/react';
const Workspace = () => (
  <div>workspace</div>
);

const Root = ({ store, persistor }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Fragment>
          <Route exact path="/" component={App} />
          <Route exact path="/workspace" component={Workspace} />

        </Fragment>
      </Router>
    </PersistGate>
  </Provider>
);

export default Root;
