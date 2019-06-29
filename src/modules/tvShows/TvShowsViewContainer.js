// @flow
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import TvShowsView from './TvShowsView';

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
)(TvShowsView);
