// @flow
type MoviesStateType = {};

type ActionType = {
  type: string,
  payload?: any,
};

export const initialState: MoviesStateType = {
  loadingNowPlaying: true,
  nowPlayingError: 200,
  nowPlaying: [],
};

export const ACTION_NOW_PLAYING_SET_LOADING = 'MoviesState/ACTION_NOW_PLAYING_SET_LOADING';
export const ACTION_NOW_PLAYING_SET_ERROR = 'MoviesState/ACTION_NOW_PLAYING_SET_ERROR';
export const ACTION_NOW_PLAYING_SET_DATA = 'MoviesState/ACTION_NOW_PLAYING_SET_DATA';

export function setNowPlayingLoading(payload): ActionType {
  return {
    type: ACTION_NOW_PLAYING_SET_LOADING,
    payload,
  };
}

export function setNowPlayingError(payload): ActionType {
  return {
    type: ACTION_NOW_PLAYING_SET_ERROR,
    payload,
  };
}

export function setNowPlayingData(payload): ActionType {
  return {
    type: ACTION_NOW_PLAYING_SET_DATA,
    payload,
  };
}

export default function MoviesStateReducer(
  state: MoviesStateType = initialState,
  action: ActionType,
): MoviesStateType {
  switch (action.type) {
    case ACTION_NOW_PLAYING_SET_LOADING:
      return {
        ...state,
        loadingNowPlaying: action.payload,
      };
    case ACTION_NOW_PLAYING_SET_ERROR:
      return {
        ...state,
        nowPlayingError: action.payload,
      };
    case ACTION_NOW_PLAYING_SET_DATA:
      return {
        ...state,
        nowPlaying: action.payload,
      };
    default:
      return state;
  }
}
