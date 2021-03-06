import {
  ADD_WORKSPACE,
  SWITCH_WORKSPACES,
  ADD_ONE_TAB,
  REMOVE_SELECTED_TAB,
  RENAME_CURRENT_WORKSPACE,
  DELETE_CURRENT_WORKSPACE,
  INIT_EMPTY_WORKSPACE,
  SET_TAB_ACTIVE,
  OPEN_DASHBOARD,
  UPDATE_TAB_META,
  DRAG_DASHBOARD_TAB,
  UPDATE_CURRENT_TAB_QUERY,
  MOVE_TAB_TO_WORKSPACE,
  DRAG_DASHBOARD_SAVEDLINKS,
  ADD_TO_SAVED_LINKS,
  UPDATE_CURRENT_WS_UI
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

export const renameWorkspace = (data) => {
  return {
    type: RENAME_CURRENT_WORKSPACE,
    payload: data
  };
};

export const moveTabToWorkspace = data => {
  return {
    type: MOVE_TAB_TO_WORKSPACE,
    payload: data,
  };
};

export const switchWorkspaces = workspace => {
  return {
    type: SWITCH_WORKSPACES,
    payload: workspace
  };
};

export const addOneTab = ws => {
  return {
    type: ADD_ONE_TAB,
    payload: ws

  };
};

export const handleOpenDashBoard = data => {
  return {
    type: OPEN_DASHBOARD,
    payload: data
  };
};

export const deleteWorkspace = id => {
  return {
    type: DELETE_CURRENT_WORKSPACE,
    payload: {
      id: id
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

export const updateTabMeta = data => {
  return {
    type: UPDATE_TAB_META,
    payload: data
  };
};

export const handleDragDashBoardTab = (payload) => {
  return {
    type: DRAG_DASHBOARD_TAB,
    payload: payload
  };
};

export const handleDragDashBoardSavedLinks = (payload) => {
  return {
    type: DRAG_DASHBOARD_SAVEDLINKS,
    payload: payload
  };
};

export const handleUpdateCurrentTabQuery = payload => {
  return {
    type: UPDATE_CURRENT_TAB_QUERY,
    payload: payload
  };
};

export const handleAddToSavedLinks = payload => {
  return {
    type: ADD_TO_SAVED_LINKS,
    payload: payload
  };
};

export const handleCurrentWsUI = arg => {
  return {
    type: UPDATE_CURRENT_WS_UI,
    payload: arg
  };
};
