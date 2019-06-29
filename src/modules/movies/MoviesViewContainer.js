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
      setNPLoading: show => dispatch(setNowPlayingLoading(show)),
      setNPIndex: index => dispatch(setNowPlayingIndex(index)),
    }),
  ),
  lifecycle({
    componentDidMount() {
      const { getNowPlaying } = this.props;
      getNowPlaying();
    },
  }),
)(MoviesView);
