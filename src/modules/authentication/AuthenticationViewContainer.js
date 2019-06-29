// @flow
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { ResetNavigator } from '../../env';
import AuthenticationView from './AuthenticationView';

export default compose(
  connect(
    state => ({}),
    (dispatch, { navigation }) => ({}),
  ),
  lifecycle({
    componentDidMount() {

    },
  }),
)(AuthenticationView);
