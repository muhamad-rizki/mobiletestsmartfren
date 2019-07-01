// @flow
type MoreItemsStateType = {};

type ActionType = {
  type: string,
  payload?: any,
};

export const initialState: MoreItemsStateType = {
  list: [],
  page: 1,
  error: 200,
  loading: false,
};

export const ACTION_SET_MORE_LIST = 'MoreItemsState/ACTION_SET_MORE_LIST';
export const ACTION_SET_MORE_PAGE = 'MoreItemsState/ACTION_SET_MORE_PAGE';
export const ACTION_SET_MORE_ERROR = 'MoreItemsState/ACTION_SET_MORE_ERROR';
export const ACTION_SET_MORE_LOADING = 'MoreItemsState/ACTION_SET_MORE_LOADING';

export function setMoreList(append, payload): ActionType {
  return {
    type: ACTION_SET_MORE_LIST,
    payload,
    append,
  };
}

export function setMorePage(payload): ActionType {
  return {
    type: ACTION_SET_MORE_PAGE,
    payload,
  };
}

export function setMoreError(payload): ActionType {
  return {
    type: ACTION_SET_MORE_ERROR,
    payload,
  };
}

export function setMoreLoading(payload): ActionType {
  return {
    type: ACTION_SET_MORE_LOADING,
    payload,
  };
}

export default function MoreItemsStateReducer(
  state: MoreItemsStateType = initialState,
  action: ActionType,
): MoreItemsStateType {
  switch (action.type) {
    case ACTION_SET_MORE_LIST:
      if (!action.append) {
        return {
          ...state,
          list: action.payload,
        };
      }
      return {
        ...state,
        list: [].concat(state.list, action.payload),
      };
    case ACTION_SET_MORE_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case ACTION_SET_MORE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ACTION_SET_MORE_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}
