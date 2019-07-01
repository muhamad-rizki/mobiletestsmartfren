// @flow
import React from 'react';
import {
  View,
  Text,
} from 'react-native-ui-lib';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { withNavigation } from 'react-navigation';
import { Header, Icon } from '../../components';
import AuthenticationViewContainer from '../authentication/AuthenticationViewContainer';
import MoviesViewContainer from '../movies/MoviesViewContainer';
import TvShowsViewContainer from '../tvShows/TvShowsViewContainer';
import { WINDOW } from '../../env';
import { colors } from '../../styles';

const AppIcon = require('../../../assets/images/icon.png');

type Props = {};

const SceneMapper = SceneMap({
  tvshows: withNavigation(TvShowsViewContainer),
  movies: withNavigation(MoviesViewContainer),
  account: withNavigation(AuthenticationViewContainer),
});

export default (props: Props) => {
  const {
    changeIndex
  } = props;
  return (
    <View flex>
      <Header
        icon={AppIcon}
        rightComponent={(
          <View flex style={{ alignItems: 'flex-end' }} centerV padding-16>
            <Icon name="bell" type="Feather" size={24} color={colors.secondary} />
          </View>
        )}
      />
      <View flex>
        <TabView
          swipeEnabled={false}
          removeClippedSubviews
          navigationState={props}
          renderScene={SceneMapper}
          onIndexChange={changeIndex}
          initialLayout={{ width: WINDOW.width, height: 0 }}
          tabBarPosition="bottom"
          lazy
          renderLazyPlaceholder={() => <View />}
          renderTabBar={mProps => (
            <TabBar
              {...mProps}
              renderIndicator={() => { }}
              style={{
                backgroundColor: colors.white,
                borderTopWidth: 0.5,
                borderTopColor: colors.lightGray,
              }}
              pressColor={colors.lightGray}
              renderLabel={({ focused, route }) => (
                <Text
                  style={{
                    color: focused ? colors.secondary : colors.lightGray,
                    textTransform: 'uppercase',
                    fontSize: 12,
                  }}
                >
                  {route.title}
                </Text>
              )}
              renderIcon={({ focused, route }) => (
                <Icon
                  size={24}
                  color={focused ? colors.secondary : colors.grey}
                  name={route.icon}
                  type={route.iconType}
                />
              )}
            />
          )}
        />
      </View>
    </View>
  );
};
