import { ADD_WORKSPACE, SWITCH_WORKSPACE } from './types';

export const workspaceReducer = (state = [], { type, payload }) => {
  console.log(state);
  switch (type) {
  case ADD_WORKSPACE:
    return [...state, payload.workspace];
  default:
    return state;
  }
};
