// Redux
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducers

import { workspacesReducer as workspaces } from '../Workspace/reducers';


const persistConfig = {
  key: 'root',
  storage,
};

const allReducers = combineReducers({
  workspaces,
});


const persistedReducer = persistReducer(persistConfig, allReducers);

const allStoreEnhancers = compose(
  applyMiddleware(thunk, logger),
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(persistedReducer, allStoreEnhancers);

export const persistor = persistStore(store);
