// @flow
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import MovieDetailView from './MovieDetailView';

export default compose(
  connect(
    state => ({

    }),
    (dispatch, { navigation }) => ({

    }),
  ),
  lifecycle({
    componentDidMount() {

    },
  }),
)(MovieDetailView);
