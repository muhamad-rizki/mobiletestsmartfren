// @flow
type MoviesStateType = {};

type ActionType = {
  type: string,
  payload?: any,
};

export const initialState: MoviesStateType = {
  loadingUpcoming: true,
  upcomingError: 200,
  upcoming: {
    results: [],
    page: 1,
  },
  upcomingingIndex: 0,
  loadingNowPlaying: true,
  nowPlayingError: 200,
  nowPlaying: {
    results: [],
    page: 1,
  },
  nowPlayingIndex: 0,
  loadingPopular: true,
  popularError: 200,
  popular: {
    results: [],
    page: 1,
  },
  popularIndex: 0,
  loadingTopRated: true,
  topRatedError: 200,
  topRated: {
    results: [],
    page: 1,
  },
  loadingPopPerson: true,
  popPersonError: 200,
  popPerson: {
    results: [],
    page: 1,
  },
};

export const ACTION_UPCOMING_SET_LOADING = 'MoviesState/ACTION_UPCOMING_SET_LOADING';
export const ACTION_UPCOMING_SET_ERROR = 'MoviesState/ACTION_UPCOMING_SET_ERROR';
export const ACTION_UPCOMING_SET_DATA = 'MoviesState/ACTION_UPCOMING_SET_DATA';
export const ACTION_UPCOMING_SET_INDEX = 'MoviesState/ACTION_UPCOMING_SET_INDEX';
export const ACTION_NOW_PLAYING_SET_LOADING = 'MoviesState/ACTION_NOW_PLAYING_SET_LOADING';
export const ACTION_NOW_PLAYING_SET_ERROR = 'MoviesState/ACTION_NOW_PLAYING_SET_ERROR';
export const ACTION_NOW_PLAYING_SET_DATA = 'MoviesState/ACTION_NOW_PLAYING_SET_DATA';
export const ACTION_NOW_PLAYING_SET_INDEX = 'MoviesState/ACTION_NOW_PLAYING_SET_INDEX';
export const ACTION_POPULAR_SET_LOADING = 'MoviesState/ACTION_POPULAR_SET_LOADING';
export const ACTION_POPULAR_SET_ERROR = 'MoviesState/ACTION_POPULAR_SET_ERROR';
export const ACTION_POPULAR_SET_DATA = 'MoviesState/ACTION_POPULAR_SET_DATA';
export const ACTION_POPULAR_SET_INDEX = 'MoviesState/ACTION_POPULAR_SET_INDEX';
export const ACTION_TOPRATED_SET_LOADING = 'MoviesState/ACTION_TOPRATED_SET_LOADING';
export const ACTION_TOPRATED_SET_ERROR = 'MoviesState/ACTION_TOPRATED_SET_ERROR';
export const ACTION_TOPRATED_SET_DATA = 'MoviesState/ACTION_TOPRATED_SET_DATA';
export const ACTION_POPPERSON_SET_LOADING = 'MoviesState/ACTION_POPPERSON_SET_LOADING';
export const ACTION_POPPERSON_SET_ERROR = 'MoviesState/ACTION_POPPERSON_SET_ERROR';
export const ACTION_POPPERSON_SET_DATA = 'MoviesState/ACTION_POPPERSON_SET_DATA';

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
    case ACTION_UPCOMING_SET_LOADING:
      return {
        ...state,
        loadingUpcoming: action.payload,
      };
    case ACTION_UPCOMING_SET_ERROR:
      return {
        ...state,
        upcomingError: action.payload,
      };
    case ACTION_UPCOMING_SET_DATA:
      return {
        ...state,
        upcoming: action.payload,
      };
    case ACTION_UPCOMING_SET_INDEX:
      return {
        ...state,
        upcomingingIndex: action.payload,
      };
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
    case ACTION_POPULAR_SET_LOADING:
      return {
        ...state,
        loadingPopular: action.payload,
      };
    case ACTION_POPULAR_SET_ERROR:
      return {
        ...state,
        popularError: action.payload,
      };
    case ACTION_POPULAR_SET_DATA:
      return {
        ...state,
        popular: action.payload,
      };
    case ACTION_POPULAR_SET_INDEX:
      return {
        ...state,
        popularIndex: action.payload,
      };
    case ACTION_TOPRATED_SET_LOADING:
      return {
        ...state,
        loadingTopRated: action.payload,
      };
    case ACTION_TOPRATED_SET_ERROR:
      return {
        ...state,
        topRatedError: action.payload,
      };
    case ACTION_TOPRATED_SET_DATA:
      return {
        ...state,
        topRated: action.payload,
      };
    case ACTION_POPPERSON_SET_LOADING:
      return {
        ...state,
        loadingPopPerson: action.payload,
      };
    case ACTION_POPPERSON_SET_ERROR:
      return {
        ...state,
        popPersonError: action.payload,
      };
    case ACTION_POPPERSON_SET_DATA:
      return {
        ...state,
        popPerson: action.payload,
      };
    default:
      return state;
  }
}
