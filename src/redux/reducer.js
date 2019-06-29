import { combineReducers } from 'redux';

// ## Generator Reducer Imports
import movies from '../modules/movies/MoviesState';
import tvShows from '../modules/tvShows/TvShowsState';
import homeScreen from '../modules/homeScreen/HomeScreenState';
import authentication from '../modules/authentication/AuthenticationState';
import splashScreen from '../modules/splashScreen/SplashScreenState';
import app from '../modules/AppState';

export default combineReducers({
  // ## Generator Reducers
  movies,
  tvShows,
  homeScreen,
  authentication,
  splashScreen,
  app,
});
