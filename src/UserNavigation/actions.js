import {
  NAVIGATE_TO_URL,
  TOGGLE_WORKSPACES,
  TOGGLE_DROPDOWN,
  TOGGLE_NEW_WORKSPACE
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
