// @flow
import { AxiosError } from 'axios';
import { connect } from 'react-redux';
// import { BackHandler } from 'react-native';
import { compose, lifecycle, withHandlers } from 'recompose';
import SplashScreenView from './SplashScreenView';
import InvokeHelper from '../../components/InvokeHelper';
import { setTMDBConfig, setInternetStatus, setAppOpened } from '../AppState';
import { setZIndexView } from './SplashScreenState';


export default compose(
  connect(
    state => ({
      app: state.app,
      zIndex: state.splashScreen.zIndex,
    }),
    (dispatch, { navigation }) => ({
      nav: navigation,
      setAppOpened: () => dispatch(setAppOpened()),
      setZIndex: () => dispatch(setZIndexView(-1)),
      resetZIndex: () => dispatch(setZIndexView(9)),
      setConfig: config => dispatch(setTMDBConfig(config)),
      setInetStatus: status => dispatch(setInternetStatus(status)),
    }),
  ),
  withHandlers((props) => {
    let splash;
    return {
      refSplash: () => (ref) => {
        splash = ref;
      },
      fadeOut: () => () => {
        if (props.app.isFirstOpen) {
          props.setAppOpened();
        }
        splash.fadeOut(300).then(() => {
          props.setZIndex();
          if (props.onFadeOut) props.onFadeOut();
        });
      },
      fadeIn: () => () => {
        props.resetZIndex();
        splash.fadeIn(0);
      }
    };
  }),
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
      const { fadeOut } = this.props;
      setTimeout(() => {
        fadeOut();
      }, 2000);
    },
    componentWillUnmount() {
      this.props.fadeIn();
    }
  }),
)(SplashScreenView);
