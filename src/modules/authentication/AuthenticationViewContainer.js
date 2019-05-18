// @flow
import { compose } from 'recompose';
import { connect } from 'react-redux';

import AuthenticationView from './AuthenticationView';

export default compose(
  connect(
    state => ({}),
    (dispatch, { navigation }) => ({}),
  ),
)(AuthenticationView);
