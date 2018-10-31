import { ADD_WORKSPACE, SWITCH_WORKSPACE, SAVE_WORKSPACE } from './types';
import { ADD_ONE_TAB } from '../TabHandler/types';
//
const initialState = {
  unsavedWorkspace: {
    tabs: []
  }
};
//

export const workspacesReducer = (state = initialState, { type, payload }) => {

  switch (type) {
  case ADD_WORKSPACE:
    return Object.assign({}, {
      ...state,
      [payload]: {
        tabs: []
      }
    });

  case ADD_ONE_TAB:
    console.log(payload);

  default:
    return state;
  }
};
