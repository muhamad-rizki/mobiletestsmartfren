// @flow
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import HomeScreenView from './HomeScreenView';

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
)(HomeScreenView);
