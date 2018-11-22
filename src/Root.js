import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { stylesheet } from './common/stylesheet';

const Root = ({ store, persistor }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={stylesheet}>
        <App/>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

export default Root;
