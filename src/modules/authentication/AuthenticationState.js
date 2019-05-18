// @flow
type AuthenticationStateType = {};

type ActionType = {
  type: string,
  payload?: any,
};

export const initialState: AuthenticationStateType = {};

export const ACTION = 'AuthenticationState/ACTION';

export function actionCreator(): ActionType {
  return {
    type: ACTION,
  };
}

export default function AuthenticationStateReducer(state: AuthenticationStateType = initialState, action: ActionType): AuthenticationStateType {
  switch (action.type) {
    case ACTION:
      return {
        ...state,
      };
    default:
      return state;
  }
}
