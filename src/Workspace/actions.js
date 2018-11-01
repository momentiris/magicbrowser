import { ADD_WORKSPACE, SWITCH_WORKSPACES, ADD_ONE_TAB, REMOVE_SELECTED_TAB } from './types';


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

export const addOneTab = tab => {
  return {
    type: ADD_ONE_TAB,
    payload: {
      tab: tab
    }
  };
};

export const removeSelectedTab = id => {
  return {
    type: REMOVE_SELECTED_TAB,
    payload: {
      id: id
    }
  };
};
