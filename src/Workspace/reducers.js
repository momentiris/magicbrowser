import {
  ADD_WORKSPACE,
  SWITCH_WORKSPACES,
  SAVE_WORKSPACE,
  ADD_ONE_TAB,
  REMOVE_SELECTED_TAB,
  RENAME_CURRENT_WORKSPACE,
  INIT_EMPTY_WORKSPACE,
  SET_TAB_ACTIVE,
  ADD_SEARCH_QUERY
} from './types';

const initialState = {
  current: 'unsavedWorkspace',
  unsavedWorkspace: {
    tabs: [],
    active: 0
  }
};

const workspaceTemplate = {
  tabs: [],
  active: 0
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
        [payload]: workspaceTemplate
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
      return {
        ...state,
        [state.current]: {
          ...state[state.current],
          tabs: [...state[state.current].tabs, payload]
        }
      };

    case REMOVE_SELECTED_TAB:

      return Object.assign({}, state, {
        [state.current]: {
          tabs: state[state.current].tabs
            .filter((tab, i) => i !== payload.id),
          active: state[state.current].active >= state[state.current].tabs.length - 1 ?
            state[state.current].active - 1 :
            state[state.current].active
        }
      });

    case SET_TAB_ACTIVE:
      return {
        ...state,
        [state.current]: {
          ...state[state.current],
          active: payload
        }
      };

    case ADD_SEARCH_QUERY:
      const test = {
        ...state,
        [state.current]: {
          tabs: state[state.current].tabs.map((tab, i) => {
            tab.src = state[state.current].active === i ? payload : tab.src;
            return tab;
          }),
          active: state[state.current].active
        }

      };
      return test;
      // return state


    default:
      return state;
  }
};
