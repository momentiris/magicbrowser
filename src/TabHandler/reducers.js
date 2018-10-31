import { ADD_ONE_TAB, REMOVE_SELECTED_TAB } from './types';

export const tabReducer = (state = [], { type, payload }) => {

  switch (type) {
  case ADD_ONE_TAB:
    return [...state, payload.tab];
  case REMOVE_SELECTED_TAB:
    return state.filter((tab, i) => i !== payload.id);

  default:
    return state;
  }
};
