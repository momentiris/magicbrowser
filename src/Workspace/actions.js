import { ADD_WORKSPACE, SWITCH_WORKSPACE } from './types';

export const addWorkspace = workspace => {
  return {
    type: ADD_WORKSPACE,
    payload: {
      workspace: workspace
    }
  };
};
