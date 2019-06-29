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
      setNPLoading: show => dispatch(setNowPlayingLoading(show)),
      setNPIndex: index => dispatch(setNowPlayingIndex(index)),
      setPopLoading: show => dispatch({ type: ACTION_POPULAR_SET_LOADING, payload: show }),
      setPopIndex: index => dispatch({ type: ACTION_POPULAR_SET_INDEX, payload: index }),
    }),
  ),
  lifecycle({
    componentDidMount() {
      const {
        getNowPlaying,
        getPopular,
      } = this.props;
      getNowPlaying();
      getPopular();
    },
  }),
)(MoviesView);
