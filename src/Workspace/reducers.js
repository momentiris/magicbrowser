import { ADD_WORKSPACE, SWITCH_WORKSPACES, SAVE_WORKSPACE, ADD_ONE_TAB, REMOVE_SELECTED_TAB } from './types';

const initialState = {
  current: 'unsavedWorkspace',
  unsavedWorkspace: {
    tabs: []
  }
};

export const workspacesReducer = (state = initialState, { type, payload }) => {

  switch (type) {
    case ADD_WORKSPACE:
      return Object.assign({}, {
        ...state,
        [payload]: {
          tabs: []
        }
      });

    case SWITCH_WORKSPACES:
      return Object.assign({}, state, {
        current: payload
      });

    case ADD_ONE_TAB:
      return Object.assign({}, state, {
        [state.current]: {
          tabs: [...state[state.current].tabs, payload]
        }
      });

    case REMOVE_SELECTED_TAB:
      return Object.assign({}, state, {
        [state.current]: {
          tabs: state[state.current].tabs
            .filter((tab, i) => i !== payload.id)
        }
      });

    default:
      return state;
  }
};
