// @flow
type HomeScreenStateType = {};

type ActionType = {
  type: string,
  payload?: any,
};

export const initialState: HomeScreenStateType = {};

export const ACTION = 'HomeScreenState/ACTION';

export function actionCreator(): ActionType {
  return {
    type: ACTION,
  };
}

export default function HomeScreenStateReducer(state: HomeScreenStateType = initialState, action: ActionType): HomeScreenStateType {
  switch (action.type) {
    case ACTION:
      return {
        ...state,
      };
    default:
      return state;
  }
}
