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
  DRAG_DASHBOARD_TAB,
  UPDATE_CURRENT_TAB_QUERY
} from './types';

const dummySavedLinks = [
  {
    title: 'For Sulki and Min, creative freedom is overrated and they be...',
    src: 'itsnicethat.com',
    img: '',
  },
  {
    title: 'Cognitive models of information retrieval',
    src: 'wikipedia.com',
    img: '',
  },
  {
    title: 'A demonstration of the first web browser, the Nexus browser',
    src: 'youtube.com',
    img: '',
  },

];

const initialState = {
  current: 'default',
  default: {
    tabs: [
      {
        src: 'http://google.se',
        title: false,
        favicon: false,
        searchQuery: 'http://google.se'
      }
    ],
    savedLinks: dummySavedLinks,
    active: 0,
    color: '#949494'
  }
};

const tabTemplate = {
  src: 'http://google.se',
  title: false,
  favicon: false,
  searchQuery: 'http://google.se'
};

const workspaceTemplate = {
  tabs: [
    {
      src: 'http://google.se',
      title: false,
      favicon: false,
      searchQuery: 'http://google.se'
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
        ...others,
      });

      const clone = Object.assign({}, state);
      const updatedWs = renameProp(payload.target, payload.newName, clone);
      updatedWs[payload.newName].color = payload.newColor;
      updatedWs.current = updatedWs.current === payload.target ? payload.newName : updatedWs.current;
      return updatedWs;

    case SWITCH_WORKSPACES:
      return Object.assign({}, state, {
        current: payload
      });
      break;

    case ADD_ONE_TAB:
      return {
        ...state,
        [payload.ws || state.current]: {
          ...state[payload.ws || state.current],
          tabs: [...state[payload.ws || state.current].tabs, {
            ...tabTemplate
          }]
        }
      };
      break;

    case REMOVE_SELECTED_TAB:

      return Object.assign({}, state, {
        [state.current]: {
          ...state[state.current],
          tabs: state[state.current].tabs
            .filter((tab, i) => i !== payload.id),
          active: 0,
          color: state[state.current].color
        }
      });
      break;

    case SET_TAB_ACTIVE:
      return {
        ...state,
        [state.current]: {
          ...state[state.current],
          active: payload
        }
      };
      break;

    case NAVIGATE_TO_URL:

      const newUrl = {
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

      return newUrl;

    case UPDATE_CURRENT_TAB_QUERY:
      const withUpdatedQuery = { ...state };

      withUpdatedQuery[withUpdatedQuery.current]
        .tabs[withUpdatedQuery[withUpdatedQuery.current].active]
        .searchQuery = payload;

      return withUpdatedQuery;
      break;

    case UPDATE_TAB_META:
      return {
        ...state,
        [state.current]: {
          ...state[state.current],
          tabs: state[state.current].tabs.map((tab, i) => {
            tab[payload.type] = i === parseInt(payload.id) ?
              payload.data :
              tab[payload.type];
            return tab;
          }),
          active: state[state.current].active,
        }
      };
      break;

    case DRAG_DASHBOARD_TAB:
      if (payload.dashboard) {
        const newDash = {
          ...state,
          [state.current]: {
            ...state[state.current],
            tabs: payload.newTabs
          }
        };
        const dashboardIndex = newDash[newDash.current].tabs.findIndex(tab => tab.src === 'dashboard');
        return {
          ...newDash,
          [newDash.current]: {
            ...newDash[newDash.current],
            active: dashboardIndex
          }
        };
      } else {
        return {
          ...state,
          [state.current]: {
            ...state[state.current],
            active: payload.newIndex,
            tabs: payload.newTabs
          }
        };
      }

      // return state;
      break;

    case OPEN_DASHBOARD:
      if (state[state.current].tabs.find(({ src }) => src === 'dashboard')) {
        const dashboardIndex = state[state.current].tabs.findIndex(tab => tab.src === 'dashboard');
        const dashboardTab = state[state.current].tabs.find(tab => tab.src === 'dashboard');
        const withoutId = [...state[state.current].tabs];
        withoutId[dashboardIndex] = {
          src: 'dashboard',
          title: 'Dashboard',
          id: payload.id === false ? false : state.current
        };
        return {
          ...state,
          [state.current]: {
            ...state[state.current],
            tabs: withoutId,
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
              title: 'Dashboard',
              id: state.current
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
