import { ADD_ONE_TAB, REMOVE_ONE_TAB } from './types';

export function addOneTab(tabs) {
  console.log('action: ' + ADD_ONE_TAB);
  return {
    type: ADD_ONE_TAB,
    payload: {
      tabs: tabs
    }
  };
}
