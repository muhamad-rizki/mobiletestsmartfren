// @flow
type TvShowStateType = {};

type ActionType = {
  type: string,
  payload?: any,
};

export const initialState: TvShowStateType = {
  loadingAiringToday: true,
  airingTodayError: 200,
  airingToday: {
    results: [],
    page: 1,
  },
  airingTodayingIndex: 0,
  loadingOnTheAir: true,
  onTheAirError: 200,
  onTheAir: {
    results: [],
    page: 1,
  },
  onTheAirIndex: 0,
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

export const ACTION_AIRINGTODAY_SET_LOADING = 'TvShowState/ACTION_AIRINGTODAY_SET_LOADING';
export const ACTION_AIRINGTODAY_SET_ERROR = 'TvShowState/ACTION_AIRINGTODAY_SET_ERROR';
export const ACTION_AIRINGTODAY_SET_DATA = 'TvShowState/ACTION_AIRINGTODAY_SET_DATA';
export const ACTION_AIRINGTODAY_SET_INDEX = 'TvShowState/ACTION_AIRINGTODAY_SET_INDEX';
export const ACTION_ONTHEAIR_SET_LOADING = 'TvShowState/ACTION_ONTHEAIR_SET_LOADING';
export const ACTION_ONTHEAIR_SET_ERROR = 'TvShowState/ACTION_ONTHEAIR_SET_ERROR';
export const ACTION_ONTHEAIR_SET_DATA = 'TvShowState/ACTION_ONTHEAIR_SET_DATA';
export const ACTION_ONTHEAIR_SET_INDEX = 'TvShowState/ACTION_ONTHEAIR_SET_INDEX';
export const ACTION_POPULAR_SET_LOADING = 'TvShowState/ACTION_POPULAR_SET_LOADING';
export const ACTION_POPULAR_SET_ERROR = 'TvShowState/ACTION_POPULAR_SET_ERROR';
export const ACTION_POPULAR_SET_DATA = 'TvShowState/ACTION_POPULAR_SET_DATA';
export const ACTION_POPULAR_SET_INDEX = 'TvShowState/ACTION_POPULAR_SET_INDEX';
export const ACTION_TOPRATED_SET_LOADING = 'TvShowState/ACTION_TOPRATED_SET_LOADING';
export const ACTION_TOPRATED_SET_ERROR = 'TvShowState/ACTION_TOPRATED_SET_ERROR';
export const ACTION_TOPRATED_SET_DATA = 'TvShowState/ACTION_TOPRATED_SET_DATA';

export function setOnTheAirLoading(payload): ActionType {
  return {
    type: ACTION_ONTHEAIR_SET_LOADING,
    payload,
  };
}

export function setOnTheAirError(payload): ActionType {
  return {
    type: ACTION_ONTHEAIR_SET_ERROR,
    payload,
  };
}

export function setOnTheAirData(payload): ActionType {
  return {
    type: ACTION_ONTHEAIR_SET_DATA,
    payload,
  };
}

export function setOnTheAirIndex(payload): ActionType {
  return {
    type: ACTION_ONTHEAIR_SET_INDEX,
    payload,
  };
}

export default function TvShowStateReducer(
  state: TvShowStateType = initialState,
  action: ActionType,
): TvShowStateType {
  switch (action.type) {
    case ACTION_AIRINGTODAY_SET_LOADING:
      return {
        ...state,
        loadingAiringToday: action.payload,
      };
    case ACTION_AIRINGTODAY_SET_ERROR:
      return {
        ...state,
        airingTodayError: action.payload,
      };
    case ACTION_AIRINGTODAY_SET_DATA:
      return {
        ...state,
        airingToday: action.payload,
      };
    case ACTION_AIRINGTODAY_SET_INDEX:
      return {
        ...state,
        airingTodayingIndex: action.payload,
      };
    case ACTION_ONTHEAIR_SET_LOADING:
      return {
        ...state,
        loadingOnTheAir: action.payload,
      };
    case ACTION_ONTHEAIR_SET_ERROR:
      return {
        ...state,
        onTheAirError: action.payload,
      };
    case ACTION_ONTHEAIR_SET_DATA:
      return {
        ...state,
        onTheAir: action.payload,
      };
    case ACTION_ONTHEAIR_SET_INDEX:
      return {
        ...state,
        onTheAirIndex: action.payload,
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
    default:
      return state;
  }
}
