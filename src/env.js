import { StackActions, NavigationActions } from 'react-navigation';

export const TEST_CONST = '';

export function ResetNavigator(navigation, routeName, params) {
  const resetAction = NavigationActions.navigate({ routeName, params, key: null });
  navigation.dispatch(resetAction);
}
