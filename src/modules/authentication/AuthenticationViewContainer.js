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
      const { navigation } = this.props;
      setTimeout(() => {
        ResetNavigator(navigation, 'WelcomeScreen');
      }, 4000);
    },
  }),
)(AuthenticationView);
