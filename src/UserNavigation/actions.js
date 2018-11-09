import {
  NAVIGATE_TO_URL,
  TOGGLE_WORKSPACES,
} from './types';

export function navigateToUrl(url) {
  return {
    type: NAVIGATE_TO_URL,
    payload: url

  };
}

export const toggleWorkspaces = (arg) => {
  return (dispatch, getState) => {
    return dispatch({
      type: TOGGLE_WORKSPACES,
      payload: arg
    }, getState);
  };
};
