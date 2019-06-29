// @flow
type MoviesStateType = {};

type ActionType = {
  type: string,
  payload?: any,
};

export const initialState: MoviesStateType = {
  loadingNowPlaying: true,
  nowPlayingError: 200,
  nowPlaying: {
    results: [],
    page: 1,
    total_results: 0,
    total_pages: 1,
  },
  nowPlayingIndex: 0,
};

export const ACTION_NOW_PLAYING_SET_LOADING = 'MoviesState/ACTION_NOW_PLAYING_SET_LOADING';
export const ACTION_NOW_PLAYING_SET_ERROR = 'MoviesState/ACTION_NOW_PLAYING_SET_ERROR';
export const ACTION_NOW_PLAYING_SET_DATA = 'MoviesState/ACTION_NOW_PLAYING_SET_DATA';
export const ACTION_NOW_PLAYING_SET_INDEX = 'MoviesState/ACTION_NOW_PLAYING_SET_INDEX';

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

export function setNowPlayingIndex(payload): ActionType {
  return {
    type: ACTION_NOW_PLAYING_SET_INDEX,
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
    case ACTION_NOW_PLAYING_SET_INDEX:
      return {
        ...state,
        nowPlayingIndex: action.payload,
      };
    default:
      return state;
  }
}
