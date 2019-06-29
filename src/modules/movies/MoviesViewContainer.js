// @flow
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import MoviesView from './MoviesView';
import InvokeHelper from '../../components/InvokeHelper';

export default compose(
  connect(
    state => ({

    }),
    (dispatch, { navigation }) => ({
      getNowPlaying: () => {
        new InvokeHelper().getNowPlayingMovies()
          .then((response) => {
            dispatch();
          })
          .catch(() => {

          });
      }
    }),
  ),
  lifecycle({
    componentDidMount() {

    },
  }),
)(MoviesView);
