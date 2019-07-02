import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { StatusBar, Platform } from 'react-native';
import { fadeIn, fadeOut } from 'react-navigation-transitions';
import { Icon } from '../../components';
import { colors, fonts } from '../../styles';
import AuthenticationViewContainer from '../authentication/AuthenticationViewContainer';
import HomeScreenViewContainer from '../homeScreen/HomeScreenViewContainer';
import MovieDetailViewContainer from '../movieDetail/MovieDetailViewContainer';
import MoreItemsViewContainer from '../moreItems/MoreItemsViewContainer';

let currentIndex = 0;

const stackNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreenViewContainer,
      navigationOptions: {
        header: null,
      }
    },
    Authentication: {
      screen: AuthenticationViewContainer,
      navigationOptions: {
        header: null,
      }
    },
    MovieDetail: {
      screen: MovieDetailViewContainer,
      navigationOptions: {
        header: null,
      }
    },
    MoreItems: {
      screen: MoreItemsViewContainer,
      navigationOptions: {
        header: null,
      }
    }
  },
  {
    // initialRouteName: 'MovieDetail',
    transitionConfig: (sceneProps) => {
      if (currentIndex < sceneProps.index) {
        currentIndex = sceneProps.index;
        return fadeIn();
      }
      currentIndex = sceneProps.index;
      return fadeOut();
    },
    defaultNavigationOptions: {
      gesturesEnabled: false,
      titleStyle: {
        fontFamily: fonts.primaryLight,
      },
      headerStyle: {
        backgroundColor: colors.primary,
        borderBottomWidth: 0,
        paddingTop: Platform.select({ ios: 0, android: StatusBar.currentHeight }),
        height: 55 + StatusBar.currentHeight
      },
      headerTitleStyle: {
        color: colors.white,
        fontFamily: fonts.primaryRegular,
      },
      headerTintColor: colors.white,
      headerLeft: (props) => {
        const { onPress, tintColor } = props;
        return (
          <Icon
            style={{
              padding: 12,
            }}
            name="arrow-left"
            type="Feather"
            size={24}
            color={tintColor}
            onPress={onPress}
          />
        );
      },
    },
  },
);

export default createAppContainer(stackNavigator);
