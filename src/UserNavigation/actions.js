import {
  NAVIGATE_TO_URL,
  TOGGLE_WORKSPACES,
  TOGGLE_DROPDOWN,
  TOGGLE_NEW_WORKSPACE,
  TOGGLE_NEW_WORKSPACE_OVERFLOW,
  TOGGLE_URLBAR_FOCUS,
  OPEN_DASHBOARD
} from './types';

export function navigateToUrl(url) {
  return {
    type: NAVIGATE_TO_URL,
    payload: url
  };
}

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
