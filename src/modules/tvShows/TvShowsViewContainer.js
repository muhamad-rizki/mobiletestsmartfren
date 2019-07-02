// @flow
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import TvShowsView from './TvShowsView';
import {
  setOnTheAirError,
  setOnTheAirLoading,
  setOnTheAirData,
  ACTION_POPULAR_SET_ERROR,
  ACTION_POPULAR_SET_LOADING,
  ACTION_POPULAR_SET_DATA,
  ACTION_TOPRATED_SET_ERROR,
  ACTION_TOPRATED_SET_LOADING,
  ACTION_TOPRATED_SET_DATA,
  ACTION_AIRINGTODAY_SET_ERROR,
  ACTION_AIRINGTODAY_SET_LOADING,
  ACTION_AIRINGTODAY_SET_DATA,
  setOnTheAirIndex,
  ACTION_POPULAR_SET_INDEX,
  ACTION_AIRINGTODAY_SET_INDEX,
} from './TvShowsState';
import InvokeHelper from '../../components/InvokeHelper';

export default compose(
  connect(
    state => ({
      ...state.tvShows,
      imgUrl: state.app.images.secure_base_url,
      genres: [...state.app.movieGenres, ...state.app.tvGenres],
      tabIndex: state.homeScreen.index,
    }),
    (dispatch, { navigation }) => ({
      getOnTheAir: () => {
        // reset status
        dispatch(setOnTheAirError(200));
        dispatch(setOnTheAirLoading(true));
        // invoke api get now playing
        new InvokeHelper().getNowPlaying('tv')
          .then((response) => {
            // clear status
            dispatch(setOnTheAirError(200));
            // store data
            dispatch(setOnTheAirData(response.data));
          })
          .catch((error) => {
            // set error status
            dispatch(setOnTheAirError(error.code));
          });
      },
      getPopular: () => {
        // reset status
        dispatch({ type: ACTION_POPULAR_SET_ERROR, payload: 200 });
        dispatch({ type: ACTION_POPULAR_SET_LOADING, payload: true });
        // invoke api get now playing
        new InvokeHelper().getPopular('tv')
          .then((response) => {
            // clear status
            dispatch({ type: ACTION_POPULAR_SET_ERROR, payload: 200 });
            // store data
            dispatch({ type: ACTION_POPULAR_SET_DATA, payload: response.data });
          })
          .catch((error) => {
            // set error status
            dispatch({ type: ACTION_POPULAR_SET_ERROR, payload: error.code });
          });
      },
      getTopRated: () => {
        // reset status
        dispatch({ type: ACTION_TOPRATED_SET_ERROR, payload: 200 });
        dispatch({ type: ACTION_TOPRATED_SET_LOADING, payload: true });
        // invoke api get now playing
        new InvokeHelper().getTopRated('tv')
          .then((response) => {
            // clear status
            dispatch({ type: ACTION_TOPRATED_SET_ERROR, payload: 200 });
            // store data
            dispatch({ type: ACTION_TOPRATED_SET_DATA, payload: response.data });
          })
          .catch((error) => {
            // set error status
            dispatch({ type: ACTION_TOPRATED_SET_ERROR, payload: error.code });
          });
      },
      getAiringToday: () => {
        // reset status
        dispatch({ type: ACTION_AIRINGTODAY_SET_ERROR, payload: 200 });
        dispatch({ type: ACTION_AIRINGTODAY_SET_LOADING, payload: true });
        // invoke api get now playing
        new InvokeHelper().getUpcoming('tv')
          .then((response) => {
            // clear status
            dispatch({ type: ACTION_AIRINGTODAY_SET_ERROR, payload: 200 });
            // store data
            dispatch({ type: ACTION_AIRINGTODAY_SET_DATA, payload: response.data });
          })
          .catch((error) => {
            // set error status
            dispatch({ type: ACTION_AIRINGTODAY_SET_ERROR, payload: error.code });
          });
      },
      setNPLoading: show => dispatch(setOnTheAirLoading(show)),
      setNPIndex: index => dispatch(setOnTheAirIndex(index)),
      setPopLoading: show => dispatch({ type: ACTION_POPULAR_SET_LOADING, payload: show }),
      setPopIndex: index => dispatch({ type: ACTION_POPULAR_SET_INDEX, payload: index }),
      setUCLoading: show => dispatch({ type: ACTION_AIRINGTODAY_SET_LOADING, payload: show }),
      setUCIndex: index => dispatch({ type: ACTION_AIRINGTODAY_SET_INDEX, payload: index }),
      setTRLoading: show => dispatch({ type: ACTION_TOPRATED_SET_LOADING, payload: show }),
      goDetail: item => navigation.navigate({ routeName: 'MovieDetail', params: { item } }),
      goMoreItem: (type, kind) => navigation.navigate({ routeName: 'MoreItems', params: { type, kind } }),
    }),
  ),
  lifecycle({
    componentDidMount() {
      const {
        getOnTheAir,
        getPopular,
        getTopRated,
        getAiringToday,
      } = this.props;
      getOnTheAir();
      getPopular();
      getTopRated();
      getAiringToday();
    },
    shouldComponentUpdate() {
      const {
        // onTheAir,
        // popular,
        // topRated,
        tabIndex,
        // airingToday,
      } = this.props;
      if (tabIndex !== 0) {
        return false;
      }
      // if (
      //   onTheAir.results.length === 0
      //   || popular.results.length === 0
      //   || topRated.results.length === 0
      // ) {
      //   return false;
      // }
      return true;
    }
  }),
)(TvShowsView);
