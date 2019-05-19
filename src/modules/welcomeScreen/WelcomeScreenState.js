// @flow
type WelcomeScreenStateType = {};

type ActionType = {
  type: string,
  payload?: any,
};

export const initialState: WelcomeScreenStateType = {};

export const ACTION = 'WelcomeScreenState/ACTION';

export function actionCreator(): ActionType {
  return {
    type: ACTION,
  };
}

export default function WelcomeScreenStateReducer(state: WelcomeScreenStateType = initialState, action: ActionType): WelcomeScreenStateType {
  switch (action.type) {
    case ACTION:
      return {
        ...state,
      };
    default:
      return state;
  }
}
