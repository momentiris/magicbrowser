// Redux
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducers
import productsReducer from '../reducers/productsReducer';
import userReducer from '../reducers/userReducer';
import { workspaceReducer } from '../Workspace/reducers';
import searchQueryReducer from '../url/reducer';
import { tabReducer } from '../TabHandler/reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const allReducers = combineReducers({
  workspaces: {
    workspace: combineReducers({
      workspace: combineReducers({
        tabs: tabReducer,
      }),

    }),

  },
  people: userReducer,
  tabs: tabReducer,
  searchQuery: searchQueryReducer
});

const persistedReducer = persistReducer(persistConfig, allReducers);

const allStoreEnhancers = compose(
  applyMiddleware(thunk, logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(persistedReducer, allStoreEnhancers);

export const persistor = persistStore(store);
