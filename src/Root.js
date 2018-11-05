import React, { Fragment } from 'react';

import { Provider } from 'react-redux';
import App from './App';

import { PersistGate } from 'redux-persist/integration/react';


const Root = ({ store, persistor }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App/>
    </PersistGate>
  </Provider>
);

export default Root;
