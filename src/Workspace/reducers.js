import {
  ADD_WORKSPACE,
  SWITCH_WORKSPACES,
  SAVE_WORKSPACE,
  ADD_ONE_TAB,
  REMOVE_SELECTED_TAB,
  RENAME_CURRENT_WORKSPACE,
  INIT_EMPTY_WORKSPACE,
  SET_TAB_ACTIVE,
  NAVIGATE_TO_URL,
  OPEN_DASHBOARD,
  UPDATE_TAB_META,
  DRAG_DASHBOARD_TAB
} from './types';

const initialState = {
  current: 'default',
  default: {
    tabs: [
      {
        src: 'http://google.se',
        title: false,
        favicon: false,
      }
    ],
    active: 0,
    color: 'white'
  }
};

const workspaceTemplate = {
  tabs: [
    {
      src: 'http://google.se',
      title: false,
      favicon: false,
    }
  ],
  active: 0,
  color: 'white'
};

export const workspacesReducer = (state = initialState, { type, payload }) => {

  switch (type) {
    case INIT_EMPTY_WORKSPACE:
      return Object.assign({},
        state.default ? {
          ...state
        } : {
          ...state,
          ...initialState
        });

    case ADD_WORKSPACE:
      return Object.assign({}, {
        ...state,
        [payload.name]: {
          ...workspaceTemplate,
          tabs: payload.import ? [...state[payload.import].tabs] : [...workspaceTemplate.tabs],
          color: payload.color
        }
      });

    case RENAME_CURRENT_WORKSPACE:
      const renameProp = (
        oldProp,
        newProp,
        { [oldProp]: old, ...others }
      ) => ({
        [newProp]: old,
        ...others
      });

      const clone = Object.assign({}, state);
      const newObject = renameProp(clone.current, payload, clone);
      newObject.current = payload;

      return newObject;

    case SWITCH_WORKSPACES:

      return Object.assign({}, state, {
        current: payload
      });

    case ADD_ONE_TAB:
      return {
        ...state,
        [state.current]: {
          ...state[state.current],
          tabs: [...state[state.current].tabs, payload]
        }
      };

    case REMOVE_SELECTED_TAB:
      return Object.assign({}, state, {
        [state.current]: {
          tabs: state[state.current].tabs
            .filter((tab, i) => i !== payload.id),
          active: state[state.current].active >= state[state.current].tabs.length - 1 ?
            state[state.current].active - 1 :
            state[state.current].active,
          color: state[state.current].color

        }
      });

    case SET_TAB_ACTIVE:

      return {
        ...state,
        [state.current]: {
          ...state[state.current],
          active: payload
        }
      };

    case NAVIGATE_TO_URL:
      const test = {
        ...state,
        [state.current]: {
          tabs: state[state.current].tabs.map((tab, i) => {
            tab.src = state[state.current].active === i ? payload : tab.src;
            return tab;
          }),
          active: state[state.current].active,
          color: state[state.current].color
        }
      };

      return test;

    case UPDATE_TAB_META:

      return {
        ...state,
        [state.current]: {
          tabs: state[state.current].tabs.map((tab, i) => {
            tab[payload.type] = i === parseInt(payload.id) ?
              payload.data :
              tab[payload.type];
            return tab;
          }),
          active: state[state.current].active,
          color: state[state.current].color
        }
      };

    case DRAG_DASHBOARD_TAB:

      return {
        ...state,
        [state.current]: {
          ...state[state.current],
          active: payload.newIndex,
          tabs: payload.newTabs
        }
      };
      // return state;
      break;

    case OPEN_DASHBOARD:

      if (state[state.current].tabs.find(({ src }) => src === 'dashboard')) {
        const dashboardIndex = state[state.current].tabs.findIndex(tab => tab.src === 'dashboard');
        return {
          ...state,
          [state.current]: {
            ...state[state.current],
            active: dashboardIndex
          }
        };

      } else {
        const newState = {
          ...state,
          [state.current]: {
            ...state[state.current],
            tabs: [...state[state.current].tabs, {
              src: 'dashboard',
              title: 'Dashboard'
            }]
          }
        };

        const dashboardIndex = newState[newState.current].tabs.findIndex(tab => tab.src === 'dashboard');

        return {
          ...newState,
          [newState.current]: {
            ...newState[newState.current],
            active: dashboardIndex
          }
        };
      }



      break;

    default:
      return state;
  }
};
