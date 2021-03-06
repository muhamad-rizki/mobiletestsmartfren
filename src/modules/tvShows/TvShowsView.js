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
    goDetail,
    goMoreItem,
  } = props;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View marginB-16>
        <View
          padding-8
          marginT-16
          marginB-8
          style={{
            backgroundColor: colors.yellow,
            flexDirection: 'row',
            width: '100%',
          }}
        >
          <Text style={{ flex: 1 }}>
            <Icon size={14} name="movie-roll" type="MaterialCommunityIcons" />
            {' On The Air TV Show'}
          </Text>
          <Button
            label="More"
            size="xSmall"
            color="#fff"
            backgroundColor="#000"
            onPress={() => goMoreItem('tv', 'on_the_air')}
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
          onPress={goDetail}
        />
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
            {' Today\'s Popular TV Show'}
          </Text>
          <Button
            label="More"
            size="xSmall"
            color="#fff"
            backgroundColor="#000"
            onPress={() => goMoreItem('tv', 'popular')}
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
          onPress={goDetail}
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
            {' Top Rated TV Show'}
          </Text>
          <Button
            label="More"
            size="xSmall"
            color="#fff"
            backgroundColor="#000"
            onPress={() => goMoreItem('tv', 'top_rated')}
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
          onPress={goDetail}
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
            {' Today Airing TV Show'}
          </Text>
          <Button
            label="More"
            size="xSmall"
            color="#fff"
            backgroundColor="#000"
            onPress={() => goMoreItem('tv', 'airing_today')}
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
          onPress={goDetail}
        />
      </View>
    </ScrollView>
  );
};
