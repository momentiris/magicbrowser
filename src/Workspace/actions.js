import { ADD_WORKSPACE, SWITCH_WORKSPACES } from './types';


export const addWorkspace = (workspace) => {
  return (dispatch, getState) => {
    return dispatch({
      type: ADD_WORKSPACE,
      payload: workspace
    }, getState);
  };
};

export const switchWorkspaces = workspace => {
  return {
    type: SWITCH_WORKSPACES,
    payload: workspace
  };
};
