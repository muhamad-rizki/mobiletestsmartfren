// @flow
type TvShowsStateType = {};

type ActionType = {
  type: string,
  payload?: any,
};

export const initialState: TvShowsStateType = {};

export const ACTION = 'TvShowsState/ACTION';

export function actionCreator(): ActionType {
  return {
    type: ACTION,
  };
}

export default function TvShowsStateReducer(
  state: TvShowsStateType = initialState,
  action: ActionType,
): TvShowsStateType {
  switch (action.type) {
    case ACTION:
      return {
        ...state,
      };
    default:
      return state;
  }
}
