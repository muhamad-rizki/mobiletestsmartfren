/* eslint-disable jsx-a11y/tabindex-no-positive */
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
  PopPersonList,
} from '../../components';

type Props = {};

export default (props: Props) => {
  const {
    nowPlaying,
    setNPIndex,
    imgUrl,
    nowPlayingIndex,
    genres,
    setNPLoading,
    loadingNowPlaying,
    popular,
    popularIndex,
    loadingPopular,
    setPopLoading,
    upcoming,
    upcomingIndex,
    loadingUpcoming,
    setUCLoading,
    setUCIndex,
    topRated,
    loadingTopRated,
    setTRLoading,
    popPerson,
    loadingPopPerson,
    setPPLoading,
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
            onPress={() => goMoreItem('movie', 'popular')}
          />
        </View>
        <PopularList
          popular={popular}
          imgUrl={imgUrl}
          popularIndex={popularIndex}
          setPopLoading={setPopLoading}
          loadingPopular={loadingPopular}
          activeTabIndex={tabIndex}
          tabIndex={1}
          onPress={goDetail}
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
            onPress={() => goMoreItem('movie', 'now_playing')}
          />
        </View>
        <NowPlayingList
          nowPlaying={nowPlaying}
          setNPIndex={setNPIndex}
          imgUrl={imgUrl}
          nowPlayingIndex={nowPlayingIndex}
          setNPLoading={setNPLoading}
          loadingNowPlaying={loadingNowPlaying}
          genres={genres}
          activeTabIndex={tabIndex}
          tabIndex={1}
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
            {' Top Rated Movies'}
          </Text>
          <Button
            label="More"
            size="xSmall"
            color="#fff"
            backgroundColor="#000"
            onPress={() => goMoreItem('movie', 'top_rated')}
          />
        </View>
        <TopRatedList
          topRated={topRated}
          loadingTopRated={loadingTopRated}
          setTRLoading={setTRLoading}
          imgUrl={imgUrl}
          genres={genres}
          activeTabIndex={tabIndex}
          tabIndex={1}
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
            {' Upcoming Movies'}
          </Text>
          <Button
            label="More"
            size="xSmall"
            color="#fff"
            backgroundColor="#000"
            onPress={() => goMoreItem('movie', 'upcoming')}
          />
        </View>
        <UpcomingList
          upcoming={upcoming}
          setUCIndex={setUCIndex}
          setUCLoading={setUCLoading}
          imgUrl={imgUrl}
          upcomingIndex={upcomingIndex}
          loadingUpcoming={loadingUpcoming}
          genres={genres}
          activeTabIndex={tabIndex}
          tabIndex={1}
          onPress={goDetail}
        />
        <View
          padding-8
          marginT-16
          marginB-8
          style={{
            backgroundColor: colors.blue,
            flexDirection: 'row',
            width: '100%',
          }}
        >
          <Text style={{ flex: 1 }}>
            <Icon size={14} name="account-star" type="MaterialCommunityIcons" />
            {' Popular People'}
          </Text>
          <Button
            label="More"
            size="xSmall"
            color="#fff"
            backgroundColor="#000"
            onPress={() => goMoreItem('person', 'popular')}
          />
        </View>
        <PopPersonList
          popPerson={popPerson}
          loadingPopPerson={loadingPopPerson}
          setPPLoading={setPPLoading}
          imgUrl={imgUrl}
          genres={genres}
          activeTabIndex={tabIndex}
          tabIndex={1}
          onPress={goDetail}
        />
      </View>
    </ScrollView>
  );
};
