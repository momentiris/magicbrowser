import { ADD_ONE_TAB, REMOVE_SELECTED_TAB } from './types';

export const addOneTab = tab => {
  return {
    type: ADD_ONE_TAB,
    payload: {
      tabs: tab
    }
  };
};

export const removeSelectedTab = id => {
  return {
    type: REMOVE_ONE_TAB,
    payload: {
      id: id
    }
  };
};
