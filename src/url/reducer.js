import { ADD_SEARCH_QUERY } from './types';

export default function searchQueryReducer(state = [], { type, payload }) {
  switch (type) {
  case ADD_SEARCH_QUERY:
    return payload.searchQuery;
  default:
    return state;
  }
}
