// @flow
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import HomeScreenView from './HomeScreenView';
import { setTabIndex } from './HomeScreenState';

export default compose(
  connect(
    state => ({
      ...state.homeScreen,
    }),
    (dispatch, { navigation }) => ({
      changeIndex: index => dispatch(setTabIndex(index)),
    }),
  ),
  lifecycle({
    componentDidMount() {

    },
    componentWillUnmount() {
      const { changeIndex } = this.props;
      changeIndex(1);
    }
  }),
)(HomeScreenView);
