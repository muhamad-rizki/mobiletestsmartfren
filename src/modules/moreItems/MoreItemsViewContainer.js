// @flow
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import MoreItemsView from './MoreItemsView';
import InvokeHelper from '../../components/InvokeHelper';
import {
  setMoreList,
  setMorePage,
  setMoreError,
  setMoreLoading,
} from './MoreItemsState';

export default compose(
  connect(
    state => ({
      ...state.moreItems,
      imgUrl: state.app.images.secure_base_url,
      data: {
        movie: {
          popular: state.movies.popular,
          now_playing: state.movies.nowPlaying,
          upcoming: state.movies.upcoming,
          top_rated: state.movies.topRated,
        },
        tv: {
          popular: state.tvShows.popular,
          on_the_air: state.tvShows.onTheAir,
          airing_today: state.tvShows.airingToday,
          top_rated: state.tvShows.topRated,
        },
        person: {
          popular: state.movies.popPerson,
        }
      },
      genres: [...state.app.tvGenres, ...state.app.movieGenres],
    }),
    (dispatch, { navigation }) => ({
      navigation,
      getItems: (page) => {
        const type = navigation.getParam('type', 'movie');
        const kind = navigation.getParam('kind', 'popular');
        dispatch(setMoreLoading(true));
        new InvokeHelper()
          .baseGetter(type, kind, page)
          .then((response) => {
            dispatch(setMoreLoading(false));
            dispatch(setMoreError(200));
            dispatch(setMorePage(response.data.page));
            dispatch(setMoreList(true, response.data.results));
          })
          .catch((error) => {
            dispatch(setMoreLoading(false));
            dispatch(setMoreError(error.code));
          });
      },
      clearList: () => dispatch(setMoreList(false, [])),
      onPress: item => navigation.navigate({ routeName: 'MovieDetail', params: { item } }),
    }),
  ),
  lifecycle({
    componentDidMount() {
      const {
        data,
        navigation,
        getItems,
        clearList,
      } = this.props;
      clearList(false, []);
      const type = navigation.getParam('type', 'movie');
      const kind = navigation.getParam('kind', 'popular');
      if (data[type][kind].results.length === 0) {
        getItems(1);
      }
    },
  }),
)(MoreItemsView);
