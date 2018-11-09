import {
  TOGGLE_WORKSPACES,
  TOGGLE_DROPDOWN,
  TOGGLE_NEW_WORKSPACE
} from './types';

const initialState = {
  toggleWorkspaces: false,
  toggleDropdown: false,
  toggleNewWorkspace: false,
};

export const userNavigationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_WORKSPACES:
      return Object.assign({}, {
        ...state,
        toggleWorkspaces: !state.toggleWorkspaces,
      });
      break;

    case TOGGLE_DROPDOWN:
      return Object.assign({}, {
        ...state,
        toggleDropdown: payload,
      });

      break;

    case TOGGLE_NEW_WORKSPACE:
      return Object.assign({}, {
        ...state,
        toggleNewWorkspace: !state.toggleNewWorkspace,
      });

      break;
    default:
      return initialState;

  }

};
