import {
  NAVIGATE_TO_URL,
  TOGGLE_WORKSPACES,
  TOGGLE_DROPDOWN,
  TOGGLE_NEW_WORKSPACE,
  TOGGLE_NEW_WORKSPACE_OVERFLOW,
  TOGGLE_URLBAR_FOCUS,
  OPEN_DASHBOARD,
  TOGGLE_DASHBOARD_OPEN_UI,
  TOGGLE_SAVED_LINKS_OPEN,

} from './types';


export const navigateToUrl = url => {
  return {
    type: NAVIGATE_TO_URL,
    payload: url
  };
};

export const handleDashboardOpenUI = hide => {
  return {
    type: TOGGLE_DASHBOARD_OPEN_UI,
    payload: hide
  };
};

export const handleToggleWorkspaces = () => {
  return (dispatch, getState) => {
    return dispatch({
      type: TOGGLE_WORKSPACES,
    }, getState);
  };
};

export const handleToggleDropdown = arg => {
  return (dispatch, getState) => {
    return dispatch({
      type: TOGGLE_DROPDOWN,
      payload: arg
    }, getState);
  };
};

export const handleToggleNewWorkspace = () => {
  return (dispatch, getState) => {
    return dispatch({
      type: TOGGLE_NEW_WORKSPACE,
    }, getState);
  };
};

export const handleToggleNewWorkspaceOverflow = () => {
  return (dispatch, getState) => {
    return dispatch({
      type: TOGGLE_NEW_WORKSPACE_OVERFLOW,
    }, getState);
  };
};

export const handleToggleUrlBarFocus = () => {
  return (dispatch, getState) => {
    return dispatch({
      type: TOGGLE_URLBAR_FOCUS,
    }, getState);
  };
};

export const toggleSavedLinksOpen = arg => {
  return {
    type: TOGGLE_SAVED_LINKS_OPEN,
    payload: arg
  };
};
