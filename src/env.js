import { Dimensions } from 'react-native';
import { NavigationActions } from 'react-navigation';

export const API_KEY = '12e3ae17c21d7ca174b3e36a23124075';

export const BASE_URL_V3 = 'https://api.themoviedb.org/3/';

export const BASE_URL_V4 = 'https://api.themoviedb.org/3/';

export const WINDOW = Dimensions.get('window');

export const TEST_CONST = '';

export function ResetNavigator(navigation, routeName, params) {
  const resetAction = NavigationActions.navigate({ routeName, params, key: null });
  navigation.dispatch(resetAction);
}

export function makeThousand(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
