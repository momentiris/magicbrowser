import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from './reducers/productsReducer';
import userReducer from './reducers/userReducer';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
});

const persistedReducer = persistReducer(persistConfig, allReducers);

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(persistedReducer,{
  products: [{ name: 'iPhone'}],
  user: 'Andreas'
}, allStoreEnhancers);

export const persistor = persistStore(store);
