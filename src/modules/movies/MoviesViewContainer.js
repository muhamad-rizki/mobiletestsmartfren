// @flow
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import MoviesView from './MoviesView';
import InvokeHelper from '../../components/InvokeHelper';
import {
  setNowPlayingData,
  setNowPlayingError,
  setNowPlayingLoading,
  setNowPlayingIndex,
  ACTION_POPULAR_SET_LOADING,
  ACTION_POPULAR_SET_INDEX,
  ACTION_POPULAR_SET_ERROR,
  ACTION_POPULAR_SET_DATA,
  ACTION_TOPRATED_SET_ERROR,
  ACTION_TOPRATED_SET_LOADING,
  ACTION_TOPRATED_SET_DATA,
  ACTION_UPCOMING_SET_ERROR,
  ACTION_UPCOMING_SET_LOADING,
  ACTION_UPCOMING_SET_DATA,
  ACTION_UPCOMING_SET_INDEX,
  ACTION_POPPERSON_SET_LOADING,
  ACTION_POPPERSON_SET_ERROR,
  ACTION_POPPERSON_SET_DATA,
} from './MoviesState';

export default compose(
  connect(
    state => ({
      ...state.movies,
      imgUrl: state.app.images.secure_base_url,
      genres: state.app.genres,
    }),
    (dispatch, { navigation }) => ({
      getNowPlaying: () => {
        // reset status
        dispatch(setNowPlayingError(200));
        dispatch(setNowPlayingLoading(true));
        // invoke api get now playing
        new InvokeHelper().getNowPlayingMovies()
          .then((response) => {
            // clear status
            dispatch(setNowPlayingError(200));
            // store data
            dispatch(setNowPlayingData(response.data));
          })
          .catch((error) => {
            // set error status
            dispatch(setNowPlayingError(error.code));
          });
      },
      getPopular: () => {
        // reset status
        dispatch({ type: ACTION_POPULAR_SET_ERROR, payload: 200 });
        dispatch({ type: ACTION_POPULAR_SET_LOADING, payload: true });
        // invoke api get now playing
        new InvokeHelper().getPopularMovies()
          .then((response) => {
            // clear status
            dispatch({ type: ACTION_POPULAR_SET_ERROR, payload: 200 });
            // store data
            dispatch({ type: ACTION_POPULAR_SET_DATA, payload: response.data });
          })
          .catch((error) => {
            // set error status
            dispatch({ type: ACTION_POPULAR_SET_ERROR, payload: error.code });
          });
      },
      getTopRated: () => {
        // reset status
        dispatch({ type: ACTION_TOPRATED_SET_ERROR, payload: 200 });
        dispatch({ type: ACTION_TOPRATED_SET_LOADING, payload: true });
        // invoke api get now playing
        new InvokeHelper().getTopRatedMovies()
          .then((response) => {
            // clear status
            dispatch({ type: ACTION_TOPRATED_SET_ERROR, payload: 200 });
            // store data
            dispatch({ type: ACTION_TOPRATED_SET_DATA, payload: response.data });
          })
          .catch((error) => {
            // set error status
            dispatch({ type: ACTION_TOPRATED_SET_ERROR, payload: error.code });
          });
      },
      getUpcoming: () => {
        // reset status
        dispatch({ type: ACTION_UPCOMING_SET_ERROR, payload: 200 });
        dispatch({ type: ACTION_UPCOMING_SET_LOADING, payload: true });
        // invoke api get now playing
        new InvokeHelper().getUpcomingMovies()
          .then((response) => {
            // clear status
            dispatch({ type: ACTION_UPCOMING_SET_ERROR, payload: 200 });
            // store data
            dispatch({ type: ACTION_UPCOMING_SET_DATA, payload: response.data });
          })
          .catch((error) => {
            // set error status
            dispatch({ type: ACTION_UPCOMING_SET_ERROR, payload: error.code });
          });
      },
      getPopPerson: () => {
        // reset status
        dispatch({ type: ACTION_POPPERSON_SET_ERROR, payload: 200 });
        dispatch({ type: ACTION_POPPERSON_SET_LOADING, payload: true });
        // invoke api get now playing
        new InvokeHelper().getPopularPeoples()
          .then((response) => {
            // clear status
            dispatch({ type: ACTION_POPPERSON_SET_ERROR, payload: 200 });
            // store data
            dispatch({ type: ACTION_POPPERSON_SET_DATA, payload: response.data });
          })
          .catch((error) => {
            // set error status
            dispatch({ type: ACTION_POPPERSON_SET_ERROR, payload: error.code });
          });
      },
      setNPLoading: show => dispatch(setNowPlayingLoading(show)),
      setNPIndex: index => dispatch(setNowPlayingIndex(index)),
      setPopLoading: show => dispatch({ type: ACTION_POPULAR_SET_LOADING, payload: show }),
      setPopIndex: index => dispatch({ type: ACTION_POPULAR_SET_INDEX, payload: index }),
      setUCLoading: show => dispatch({ type: ACTION_UPCOMING_SET_LOADING, payload: show }),
      setUCIndex: index => dispatch({ type: ACTION_UPCOMING_SET_INDEX, payload: index }),
      setTRLoading: show => dispatch({ type: ACTION_TOPRATED_SET_LOADING, payload: show }),
      setPPLoading: show => dispatch({ type: ACTION_POPPERSON_SET_LOADING, payload: show }),
    }),
  ),
  lifecycle({
    componentDidMount() {
      const {
        getNowPlaying,
        getPopular,
        getTopRated,
        getUpcoming,
        getPopPerson,
      } = this.props;
      getNowPlaying();
      getPopular();
      getTopRated();
      getUpcoming();
      getPopPerson();
    },
  }),
)(MoviesView);
