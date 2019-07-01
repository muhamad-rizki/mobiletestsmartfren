// @flow
type MoreItemsStateType = {};

type ActionType = {
  type: string,
  payload?: any,
};

export const initialState: MoreItemsStateType = {};

export const ACTION = 'MoreItemsState/ACTION';

export function actionCreator(): ActionType {
  return {
    type: ACTION,
  };
}

export default function MoreItemsStateReducer(
  state: MoreItemsStateType = initialState,
  action: ActionType,
): MoreItemsStateType {
  switch (action.type) {
    case ACTION:
      return {
        ...state,
      };
    default:
      return state;
  }
}
