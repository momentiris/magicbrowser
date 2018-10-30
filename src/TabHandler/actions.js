import { ADD_ONE_TAB, REMOVE_SELECTED_TAB } from './types';

export const addOneTab = tab => {
  return {
    type: ADD_ONE_TAB,
    payload: {
      tab: tab
    }
  };
};

export const removeSelectedTab = id => {
  return {
    type: REMOVE_SELECTED_TAB,
    payload: {
      id: id
    }
  };
};
