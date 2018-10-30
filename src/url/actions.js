import { ADD_SEARCH_QUERY } from './types';

export function addSearchQuery(searchQuery) {
  console.log('action: ' + ADD_SEARCH_QUERY);
  return {
    type: ADD_SEARCH_QUERY,
    payload: {
      searchQuery: searchQuery
    }
  };
}
