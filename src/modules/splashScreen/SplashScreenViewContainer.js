// @flow
import { AxiosError } from 'axios';
import { connect } from 'react-redux';
// import { BackHandler } from 'react-native';
import { compose, lifecycle } from 'recompose';
import SplashScreenView from './SplashScreenView';
import { ResetNavigator } from '../../env';
import InvokeHelper from '../../components/InvokeHelper';
import { setTMDBConfig, setInternetStatus } from '../AppState';


export default compose(
  connect(
    state => ({

    }),
    (dispatch, { navigation }) => ({
      nav: navigation,
      setConfig: config => dispatch(setTMDBConfig(config)),
      setInetStatus: status => dispatch(setInternetStatus(status)),
    }),
  ),
  lifecycle({
    componentWillMount() {
      const { setConfig, setInetStatus } = this.props;
      const api = new InvokeHelper();
      api.getConfiguration()
        .then((response) => {
          setConfig(response.data);
          setInetStatus(200);
        })
        .catch((error: AxiosError) => setInetStatus(error.code));
      api.getGenres()
        .then((response) => {
          setConfig({ movieGenres: response.data.genres });
          setInetStatus(200);
        })
        .catch((error: AxiosError) => setInetStatus(error.code));
      api.getGenres('tv')
        .then((response) => {
          setConfig({ tvGenres: response.data.genres });
          setInetStatus(200);
        })
        .catch((error: AxiosError) => setInetStatus(error.code));
    },
    componentDidMount() {
      const { navigation } = this.props;
      setTimeout(() => {
        ResetNavigator(navigation, 'HomeScreen');
      }, 3000);
    },
  }),
)(SplashScreenView);
