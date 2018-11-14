import {
  TOGGLE_WORKSPACES,
  TOGGLE_DROPDOWN,
  TOGGLE_NEW_WORKSPACE,
  TOGGLE_NEW_WORKSPACE_OVERFLOW,
  TOGGLE_URLBAR_FOCUS,
  OPEN_DASHBOARD,
  TOGGLE_DASHBOARD_OPEN_UI
} from './types';

const initialState = {
  toggleWorkspaces: false,
  toggleDropdown: false,
  toggleNewWorkspace: false,
  toggleNewWorkspaceOverflow: false,
  toggleUrlBarFocus: false,
  dashboardOpen: false
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

    case TOGGLE_NEW_WORKSPACE_OVERFLOW:
      return Object.assign({}, {
        ...state,
        toggleNewWorkspaceOverflow: !state.toggleNewWorkspaceOverflow,
      });
      break;

    case TOGGLE_URLBAR_FOCUS:
      return Object.assign({}, {
        ...state,
        toggleUrlBarFocus: !state.toggleUrlBarFocus,
      });
      break;

    case TOGGLE_DASHBOARD_OPEN_UI:
      return Object.assign({}, {
        ...initialState,
        dashboardOpen: !state.dashboardOpen,
      });
      break;

    default:
      return state;

  }

};
