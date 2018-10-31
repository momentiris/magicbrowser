import { ADD_WORKSPACE, SWITCH_WORKSPACE } from './types';

const instantiateNewWorkspace = name => {
  return {
    [name]: {
      tabs: [],
    }
  };
};

export const addWorkspace = (workspace) => {
  return (dispatch, getState) => {
    return dispatch({
      type: ADD_WORKSPACE,
      payload: workspace
    }, getState);
  };
};
export const saveWorkspace = workspace => {
  return {
    type: ADD_WORKSPACE,
    payload: {
      workspace: workspace
    }
  };
};
