import {
  TOGGLE_WORKSPACES,

} from './types';

export const userNavigationReducer = (state = [], { type, payload }) => {
  switch (type) {
    case TOGGLE_WORKSPACES:
      return state;
      break;
    default:
      return state;

  }

};
