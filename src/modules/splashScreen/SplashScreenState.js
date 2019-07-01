// @flow
type SplashScreenStateType = {};

type ActionType = {
  type: string,
  payload?: any,
};

export const initialState: SplashScreenStateType = {
  zIndex: 2,
};

export const SET_ZINDEX_VIEW = 'SplashScreenState/SET_ZINDEX_VIEW';

export function setZIndexView(zIndex): ActionType {
  return {
    type: SET_ZINDEX_VIEW,
    payload: zIndex,
  };
}

export default function SplashScreenStateReducer(
  state: SplashScreenStateType = initialState,
  action: ActionType
): SplashScreenStateType {
  switch (action.type) {
    case SET_ZINDEX_VIEW:
      return Object.assign({}, {
        ...state,
        zIndex: action.payload,
      });
    default:
      return state;
  }
}
