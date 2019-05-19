import { combineReducers } from 'redux';

// ## Generator Reducer Imports
import welcomeScreen from '../modules/welcomeScreen/WelcomeScreenState';
import authentication from '../modules/authentication/AuthenticationState';
import splashScreen from '../modules/splashScreen/SplashScreenState';
import app from '../modules/AppState';

export default combineReducers({
  // ## Generator Reducers
  welcomeScreen,
  authentication,
  splashScreen,
  app,
});
