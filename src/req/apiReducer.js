import { FETCH_USER_START, FETCH_USER_ERROR, RECIEVE_USER } from './api-actions';

const initalState = {
  fetching: false,
  fetched: false,
  results: [],
  error: null,
};

export default function apiReducer(state = initalState, action) {
  switch (action.type) {
  case FETCH_USER_START:
    return {
      ...state,
      fetching: true
    };
    break;
    
  case FETCH_USER_ERROR:
    return {
      ...state,
      fetching: false,
      error: action.payload
    };
    break;

  case RECIEVE_USER:
    return {
      ...state,
      fetching: false,
      fetched: true,
      results: action.payload,
    };
    break;
  }
  return state;
}
