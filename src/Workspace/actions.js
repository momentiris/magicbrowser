import {
  ADD_WORKSPACE,
  SWITCH_WORKSPACES,
  ADD_ONE_TAB,
  REMOVE_SELECTED_TAB,
  RENAME_CURRENT_WORKSPACE,
  INIT_EMPTY_WORKSPACE,
  SET_TAB_ACTIVE
} from './types';

export const initEmptyWorkspace = () => {
  return {
    type: INIT_EMPTY_WORKSPACE
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

export const renameWorkspace = (workspace) => {
  return {
    type: RENAME_CURRENT_WORKSPACE,
    payload: workspace
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

export const setTabActive = id => {
  return {
    type: SET_TAB_ACTIVE,
    payload: id
  };
};
