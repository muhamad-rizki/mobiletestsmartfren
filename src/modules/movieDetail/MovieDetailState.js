// @flow
type MovieDetailStateType = {};

type ActionType = {
  type: string,
  payload?: any,
};

export const initialState: MovieDetailStateType = {};

export const ACTION = 'MovieDetailState/ACTION';

export function actionCreator(): ActionType {
  return {
    type: ACTION,
  };
}

export default function MovieDetailStateReducer(
  state: MovieDetailStateType = initialState,
  action: ActionType,
): MovieDetailStateType {
  switch (action.type) {
    case ACTION:
      return {
        ...state,
      };
    default:
      return state;
  }
}
