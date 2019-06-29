import { combineReducers } from 'redux';

// ## Generator Reducer Imports
import homeScreen from '../modules/homeScreen/HomeScreenState';
import authentication from '../modules/authentication/AuthenticationState';
import splashScreen from '../modules/splashScreen/SplashScreenState';
import app from '../modules/AppState';

export default combineReducers({
  // ## Generator Reducers
  homeScreen,
  authentication,
  splashScreen,
  app,
});
