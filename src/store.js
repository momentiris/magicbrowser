import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from './reducers/productsReducer';
import userReducer from './reducers/userReducer';
import apiReducer from './req/apiReducer';
import logger from 'redux-logger';
import {req} from './req/api';
import axios from 'axios';

const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer,
  api: apiReducer,
});

const error = (store) => (next) => (action) => {
  try {
    next(action);
  } catch(e) {
    console.log('Oops! something went wrong here', e);
  }
};

const allStoreEnhancers = compose(
  applyMiddleware(thunk, logger, error),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(
  allReducers,
  {
    products: [{ name: 'iPhone'}],
    user: 'Andreas',
    api: []
  },
  allStoreEnhancers
);



store.dispatch((dispatch) => {
  // req()
  dispatch({type: 'FETCH_USER_START'});
  axios.get('https://randomuser.me/api/')
    .then(res => {
      // return res.data.results;
      dispatch({type: 'RECIEVE_USER', payload: res.data.results[0].email});
    })
    .catch((err) => {
      dispatch({type: 'FETCH_USER_ERROR', payload: err});

    });
  // dispatch({type: 'RECIEVE_USER', payload: response.data})
});
