// @flow
type AppStateType = {
  isFirstOpen: boolean,
  internetStatus: number,
};

type ActionType = {
  type: string,
  payload?: any,
};

export const initialState: AppStateType = {
  isFirstOpen: true,
  internetStatus: 200,
};

export const SET_FIRST_OPEN = 'AppState/SET_FIRST_OPEN';
export const ACTION_SET_TMDB_CONFIG = 'AppState/ACTION_SET_TMDB_CONFIG';
export const ACTION_SET_INET_STATUS = 'AppState/ACTION_SET_INET_STATUS';

export function setAppOpened(): ActionType {
  return {
    type: SET_FIRST_OPEN,
  };
}

export function setTMDBConfig(payload): ActionType {
  return {
    type: ACTION_SET_TMDB_CONFIG,
    payload,
  };
}

export function setInternetStatus(payload): ActionType {
  return {
    type: ACTION_SET_INET_STATUS,
    payload,
  };
}

export default function AppStateReducer(
  state: AppStateType = initialState,
  action: ActionType,
): AppStateType {
  switch (action.type) {
    case SET_FIRST_OPEN:
      return {
        ...state,
        isFirstOpen: false,
      };
    case ACTION_SET_TMDB_CONFIG:
      return {
        ...state,
        ...action.payload,
      };
    case ACTION_SET_INET_STATUS:
      return {
        ...state,
        internetStatus: action.payload,
      };
    default:
      return state;
  }
}
