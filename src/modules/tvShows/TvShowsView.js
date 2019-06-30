// @flow
import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native-ui-lib';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../../styles';
import {
  Icon,
  PopularList,
  NowPlayingList,
  TopRatedList,
  UpcomingList,
} from '../../components';

type Props = {};

export default (props: Props) => {
  const {
    imgUrl,
    genres,
    onTheAir,
    setNPIndex,
    onTheAirIndex,
    setNPLoading,
    loadingOnTheAir,
    popular,
    popularIndex,
    loadingPopular,
    setPopLoading,
    airingToday,
    airingTodayIndex,
    loadingAiringToday,
    setUCLoading,
    setUCIndex,
    topRated,
    loadingTopRated,
    setTRLoading,
    tabIndex,
  } = props;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View marginB-16>
        <View
          padding-8
          marginT-16
          marginB-8
          style={{
            backgroundColor: colors.green,
            flexDirection: 'row',
            width: '100%',
          }}
        >
          <Text style={{ flex: 1 }}>
            <Icon size={14} name="heart" type="MaterialCommunityIcons" />
            {' Today\'s Popular'}
          </Text>
          <Button
            label="More"
            size="xSmall"
            color="#fff"
            backgroundColor="#000"
          />
        </View>
        <PopularList
          popular={popular}
          imgUrl={imgUrl}
          popularIndex={popularIndex}
          setPopLoading={setPopLoading}
          loadingPopular={loadingPopular}
          activeTabIndex={tabIndex}
          tabIndex={0}
        />
        <View
          padding-8
          marginT-32
          marginB-8
          style={{
            backgroundColor: colors.yellow,
            flexDirection: 'row',
            width: '100%',
          }}
        >
          <Text style={{ flex: 1 }}>
            <Icon size={14} name="movie-roll" type="MaterialCommunityIcons" />
            {' Now Playing'}
          </Text>
          <Button
            label="More"
            size="xSmall"
            color="#fff"
            backgroundColor="#000"
          />
        </View>
        <NowPlayingList
          nowPlaying={onTheAir}
          setNPIndex={setNPIndex}
          imgUrl={imgUrl}
          nowPlayingIndex={onTheAirIndex}
          setNPLoading={setNPLoading}
          loadingNowPlaying={loadingOnTheAir}
          genres={genres}
          activeTabIndex={tabIndex}
          tabIndex={0}
        />
        <View
          padding-8
          marginT-16
          marginB-8
          style={{
            backgroundColor: colors.red,
            flexDirection: 'row',
            width: '100%',
          }}
        >
          <Text style={{ flex: 1 }}>
            <Icon size={14} name="movie-filter" type="MaterialIcons" />
            {' Top Rated Movies'}
          </Text>
          <Button
            label="More"
            size="xSmall"
            color="#fff"
            backgroundColor="#000"
          />
        </View>
        <TopRatedList
          topRated={topRated}
          loadingTopRated={loadingTopRated}
          setTRLoading={setTRLoading}
          imgUrl={imgUrl}
          genres={genres}
          activeTabIndex={tabIndex}
          tabIndex={0}
        />
        <View
          padding-8
          marginT-16
          marginB-8
          style={{
            backgroundColor: colors.lightPurple,
            flexDirection: 'row',
            width: '100%',
          }}
        >
          <Text style={{ flex: 1 }}>
            <Icon size={14} name="timetable" type="MaterialCommunityIcons" />
            {' Upcoming Movies'}
          </Text>
          <Button
            label="More"
            size="xSmall"
            color="#fff"
            backgroundColor="#000"
          />
        </View>
        <UpcomingList
          upcoming={airingToday}
          setUCIndex={setUCIndex}
          setUCLoading={setUCLoading}
          imgUrl={imgUrl}
          upcomingIndex={airingTodayIndex}
          loadingUpcoming={loadingAiringToday}
          genres={genres}
          activeTabIndex={tabIndex}
          tabIndex={0}
        />
      </View>
    </ScrollView>
  );
};
