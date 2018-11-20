import {
  ADD_WORKSPACE,
  SWITCH_WORKSPACES,
  SAVE_WORKSPACE,
  ADD_ONE_TAB,
  REMOVE_SELECTED_TAB,
  RENAME_CURRENT_WORKSPACE,
  DELETE_CURRENT_WORKSPACE,
  INIT_EMPTY_WORKSPACE,
  SET_TAB_ACTIVE,
  NAVIGATE_TO_URL,
  OPEN_DASHBOARD,
  UPDATE_TAB_META,
  DRAG_DASHBOARD_TAB,
  DRAG_DASHBOARD_SAVEDLINKS,
  UPDATE_CURRENT_TAB_QUERY,
  MOVE_TAB_TO_WORKSPACE
} from './types';

import { setContextMenuWorkspaces } from '../common/contextmenu';

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
  current: 'Unsaved',
  Unsaved: {
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
        state.Unsaved ? {
          ...state
        } : {
          ...state,
          ...initialState
        });

    case ADD_WORKSPACE:

      const addedWs =  Object.assign({}, {
        ...state,
        current: !payload.switch ? state.current : payload.name,
        [payload.name]: {
          ...workspaceTemplate,
          tabs: payload.import ? [...state[payload.import].tabs] : [...workspaceTemplate.tabs],
          color: payload.color
        }
      });
      const withoutCurrent = Object.keys(addedWs).filter(ws => ws !== 'current');
      setContextMenuWorkspaces(withoutCurrent);
      return addedWs;
      break;

    case RENAME_CURRENT_WORKSPACE:

      const clone = Object.assign({}, state);
      const renameObjKey = ({oldObj, oldKey, newKey}) => {
        const keys = Object.keys(oldObj);
        const newObj = keys.reduce((acc, val)=>{
          if(val === oldKey){
            acc[newKey] = oldObj[oldKey];
          }
          else {
            acc[val] = oldObj[val];
          }
          return acc;
        }, {});

        return newObj;
      };

      const updatedWs = renameObjKey({
        oldObj:clone,
        oldKey: payload.target,
        newKey: payload.newName
      });

      updatedWs[payload.newName].color = payload.newColor;
      updatedWs.current = updatedWs.current === payload.target ? payload.newName : updatedWs.current;
      const withoutCurrent2 = Object.keys(updatedWs).filter(ws => ws !== 'current');
      setContextMenuWorkspaces(withoutCurrent2);
      return updatedWs;
      break;

    case DELETE_CURRENT_WORKSPACE:
      const target = [payload.id];
      const {[target[0]]: tmp, ...rest} = state;
      return rest;
      break;

    case SWITCH_WORKSPACES:
      return Object.assign({}, state, {
        current: payload
      });
      break;

    case ADD_ONE_TAB:
      const newTab = {
        ...state,
        [payload.ws || state.current]: {
          ...state[payload.ws || state.current],
          tabs: [...state[payload.ws || state.current].tabs, {
            ...tabTemplate,
            src: payload.src || tabTemplate.src
          }]
        }
      };
      newTab[newTab.current].active = newTab[newTab.current].tabs.length - 1;
      return newTab;
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
          ...state[state.current],
          tabs: state[state.current].tabs.map((tab, i) => {
            if (state[state.current].active === i) {
              tab.src = payload;
              tab.favicon = false;
            }
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
            payload.forEach(meta => {
              tab[meta.type] = i === parseInt(meta.id) ?
                meta.data :
                tab[meta.type];
            });
            return tab;

          }),
          active: state[state.current].active,
        }
      };
      break;

    case MOVE_TAB_TO_WORKSPACE:

      const findtabincurrent = state[payload.current].tabs.find((tab, i) => i === parseInt(payload.id));
      const findindexincurrent = state[payload.current].tabs.findIndex((tab, i) => i === parseInt(payload.id));

      const temparr = [...state[payload.target].tabs];
      temparr.push(findtabincurrent);

      return {
        ...state,
        [payload.current]: {
          ...state[payload.current],
          tabs: [...state[payload.current].tabs].filter((tab, i) => i !== findindexincurrent),
          active: findindexincurrent === 0 ? 0 : findindexincurrent - 1
        },
        [payload.target]: {
          ...state[payload.target],
          tabs: temparr
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

    case DRAG_DASHBOARD_SAVEDLINKS:
      if (payload.dashboard) {
        const newDash = {
          ...state,
          [state.current]: {
            ...state[state.current],
            savedLinks: payload.newTabs
          }
        };
        const dashboardIndex = newDash[newDash.current].savedLinks.findIndex(savedLinks => savedLinks.src === 'dashboard');
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
            savedLinks: payload.newSavedLink
          }
        };
      }
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
