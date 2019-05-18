// @flow
import { compose } from 'recompose';
import { connect } from 'react-redux';

import SplashScreenView from './SplashScreenView';

export default compose(
  connect(
    state => ({}),
    (dispatch, { navigation }) => ({}),
  ),
)(SplashScreenView);
