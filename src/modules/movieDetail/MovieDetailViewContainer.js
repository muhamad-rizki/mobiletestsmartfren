// @flow
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import MovieDetailView from './MovieDetailView';

export default compose(
  connect(
    state => ({
      images: state.app.images,
      imgUrl: state.app.images.secure_base_url,
      genres: [...state.app.tvGenres, ...state.app.movieGenres],
    }),
    (dispatch, { navigation }) => ({
      navigation,
    }),
  ),
  lifecycle({
    componentDidMount() {

    },
  }),
)(withNavigation(MovieDetailView));
