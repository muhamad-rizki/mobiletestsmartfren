// @flow
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import MoreItemsView from './MoreItemsView';

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
)(MoreItemsView);
