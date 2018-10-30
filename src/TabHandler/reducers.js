import { ADD_ONE_TAB, REMOVE_ONE_TAB } from './types';

export default function tabReducer(state = [], { type, payload }) {
  switch (type) {
  case ADD_ONE_TAB:
    return [...state, payload.tabs];
  case REMOVE_ONE_TAB:
    return state;
  default:
    return state;
  }
}
