import {
  ADD_WORKSPACE,
  SWITCH_WORKSPACES,
  SAVE_WORKSPACE,
  ADD_ONE_TAB,
  REMOVE_SELECTED_TAB,
  RENAME_CURRENT_WORKSPACE,
  INIT_EMPTY_WORKSPACE
} from './types';

const initialState = {
  current: 'unsavedWorkspace',
  unsavedWorkspace: {
    tabs: []
  }
};

export const workspacesReducer = (state = initialState, { type, payload }) => {

  switch (type) {
    case INIT_EMPTY_WORKSPACE:
      return Object.assign({},
        state.unsavedWorkspace ? {
          ...state
        } : {
          ...state,
          ...initialState
        });

    case ADD_WORKSPACE:
      return Object.assign({}, {
        ...state,
        [payload]: {
          tabs: []
        }
      });

    case RENAME_CURRENT_WORKSPACE:
      const renameProp = (
        oldProp,
        newProp,
        { [oldProp]: old, ...others }
      ) => ({
        [newProp]: old,
        ...others
      });

      const clone = Object.assign({}, state);
      const newObject = renameProp(clone.current, payload, clone);
      newObject.current = payload;

      return newObject;

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
