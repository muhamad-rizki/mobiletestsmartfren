// @flow
type HomeScreenStateType = {};

type ActionType = {
  type: string,
  payload?: any,
};

export const initialState: HomeScreenStateType = {
  index: 1,
  routes: [
    {
      key: 'tvshows',
      title: 'TV Shows',
      icon: 'tv',
      iconType: 'Feather',
    },
    {
      key: 'movies',
      title: 'Movies',
      icon: 'film',
      iconType: 'SimpleLineIcons',
    },
    {
      key: 'account',
      title: 'Account',
      icon: 'user-o',
      iconType: 'FontAwesome',
    },
  ]
};

export const ACTION_SET_TAB_INDEX = 'HomeScreenState/ACTION_SET_TAB_INDEX';

export function setTabIndex(payload): ActionType {
  return {
    type: ACTION_SET_TAB_INDEX,
    payload,
  };
}

export default function HomeScreenStateReducer(
  state: HomeScreenStateType = initialState,
  action: ActionType,
): HomeScreenStateType {
  switch (action.type) {
    case ACTION_SET_TAB_INDEX:
      return {
        ...state,
        index: action.payload,
      };
    default:
      return state;
  }
}
