// @flow
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import WelcomeScreenView from './WelcomeScreenView';

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
)(withNavigation(WelcomeScreenView));
