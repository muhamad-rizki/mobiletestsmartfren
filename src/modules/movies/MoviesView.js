// @flow
import React from 'react';
import {
  View,
  Text,
} from 'react-native-ui-lib';
import { ScrollView, FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Image from 'react-native-fast-image';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import StarRatingBar from 'react-native-star-rating-view/StarRatingBar';
import Carousel from 'react-native-snap-carousel';
import { WINDOW, makeThousand, isEmpty } from '../../env';
import { colors } from '../../styles';
import { Icon } from '../../components';

type NowPlaying = {
  vote_count: number,
  id: number,
  video: boolean,
  vote_average: number,
  title: string,
  popularity: number,
  poster_path: string,
  original_language: string,
  original_title: string,
  genre_ids: Array<number>,
  backdrop_path: string,
  adult: boolean,
  overview: string,
  release_date: string,
};

type NowPlayingData = {
  item: NowPlaying,
  index: Number,
};

type Props = {};

const renderNowPlaying = (data: NowPlayingData) => {
  const {
    item,
    index,
    imgUrl,
    nowPlayingIndex,
    loadingNowPlaying,
    setNPLoading,
  } = data;
  return (
    <View
      style={{
        height: 250,
        width: 150,
      }}
      centerV
      centerH
    >
      <ShimmerPlaceHolder
        autoRun
        visible={!loadingNowPlaying}
        width={150}
        height={250}
        style={{ alignSelf: 'center' }}
      >
        <Image
          onLoadEnd={() => nowPlayingIndex === (index - 5) && setNPLoading(false)}
          style={{
            width: 150,
            height: 250,
          }}
          resizeMode={Image.resizeMode.cover}
          source={{ uri: `${imgUrl}/w342/${item.poster_path}` }}
        />
      </ShimmerPlaceHolder>
    </View>
  );
};

const renderPopular = (data: NowPlayingData) => {
  const {
    item,
    index,
    imgUrl,
    popularIndex,
    loadingPopular,
    setPopLoading,
    lists,
  } = data;
  return (
    <View
      style={{
        height: 150,
        width: 100,
      }}
      centerV
      centerH
    >
      <View
        paddingH-4
        paddingV-2
        style={{
          backgroundColor: colors.yellow,
          position: 'absolute',
          top: 10,
          left: 0,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          zIndex: 2
        }}
      >
        <Text black small>{`#${lists.findIndex(list => list.id === item.id) + 1}`}</Text>
      </View>
      <ShimmerPlaceHolder
        autoRun
        visible={!loadingPopular}
        width={100}
        height={150}
        style={{ alignSelf: 'center' }}
      >
        <Image
          onLoadEnd={() => popularIndex === (index - 5) && setPopLoading(false)}
          style={{
            width: 100,
            height: 150,
          }}
          resizeMode={Image.resizeMode.cover}
          source={{ uri: `${imgUrl}/w92/${item.poster_path}` }}
        />
      </ShimmerPlaceHolder>
    </View>
  );
};

const renderTopRated = (data: NowPlayingData) => {
  const {
    item,
    imgUrl,
    loadingTopRated,
    setTRLoading,
    genres,
    forceLoading,
  } = data;
  return (
    <View style={{ flexDirection: 'row', }} padding-8>
      <View paddingR-12 style={{ flex: 0.2 }}>
        <ShimmerPlaceHolder
          autoRun
          visible={!loadingTopRated || !forceLoading}
          height={130}
          style={{
            alignSelf: 'center',
            flex: 1,
            width: '100%',
            marginHorizontal: 8,
          }}
        >
          <Image
            source={{ uri: `${imgUrl}/w92/${item.poster_path}` }}
            onLoadEnd={() => !forceLoading && setTRLoading(false)}
            style={{
              width: 80,
              height: 130,
            }}
            resizeMode={Image.resizeMode.cover}
          />
        </ShimmerPlaceHolder>
      </View>
      <View style={{ flex: 0.8 }}>
        <ShimmerPlaceHolder
          autoRun
          visible={!forceLoading}
          style={{ flex: 1, width: '100%' }}
          height={130}
        >
          <Text>{item.original_title}</Text>
          <Text lightGray>{isEmpty(item.genre_ids.map(genre => genres.find(g => g.id === genre).name).join(', '), 'No Category')}</Text>
          <View style={{ flexDirection: 'row' }}>
            <StarRatingBar
              maximumValue={5}
              score={item.vote_average / 2.0}
              dontShowScore
              allowsHalfStars
              accurateHalfStars
              spacing={2}
              starStyle={{
                width: 15,
                height: 15,
              }}
            />
            <Text>
              {` • ${item.vote_average.toFixed(1)} from ${makeThousand(item.vote_count)} votes`}
            </Text>
          </View>
          <TouchableWithoutFeedback>
            <Text>
              {`${isEmpty(item.overview, 'This movie doesn\'t have any description').substring(0, 80)} ... `}
              <Text primary>
                {'Read More '}
                <Icon name="chevron-double-right" type="MaterialCommunityIcons" />
              </Text>
            </Text>
          </TouchableWithoutFeedback>
        </ShimmerPlaceHolder>
      </View>
    </View>
  );
};

const renderUpcoming = (data: NowPlayingData) => {
  const {
    item,
    imgUrl,
    loadingUpcoming,
    setUCLoading,
    genres,
  } = data;
  return (
    <View
      style={{
        width: WINDOW.width * 0.75,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: colors.lightGray,
        borderRadius: 8
      }}
      marginH-16
    >
      <View style={{ flex: 0.3, padding: 8 }}>
        <ShimmerPlaceHolder
          autoRun
          visible={!loadingUpcoming}
          height={120}
          style={{ alignSelf: 'center', flex: 1, width: '100%' }}
        >
          <Image
            onLoadEnd={() => loadingUpcoming && setUCLoading(false)}
            style={{
              height: 120,
            }}
            resizeMode={Image.resizeMode.cover}
            source={{ uri: `${imgUrl}/w342/${item.poster_path}` }}
          />
        </ShimmerPlaceHolder>
      </View>
      <View style={{
        flex: 0.7,
        padding: 8,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}
      >
        <ShimmerPlaceHolder
          autoRun
          visible={!loadingUpcoming}
          style={{ flex: 1, width: '100%' }}
        >
          <Text>{item.original_title}</Text>
          <Text lightGray>{isEmpty(item.genre_ids.map(genre => genres.find(g => g.id === genre).name).join(', '), 'No Category')}</Text>
          <TouchableWithoutFeedback>
            <Text>
              {`${isEmpty(item.overview, 'This movie doesn\'t have any description').substring(0, 50)} ... `}
              <Text primary>
                {'Read More '}
                <Icon name="chevron-double-right" type="MaterialCommunityIcons" />
              </Text>
            </Text>
          </TouchableWithoutFeedback>
        </ShimmerPlaceHolder>
      </View>
    </View>
  );
};

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
  } = props;
  return (
    <ScrollView>
      <View marginB-16>
        <View
          padding-8
          marginT-16
          marginB-8
          style={{
            backgroundColor: colors.green,
          }}
        >
          <Text>Today&apos;s Popular</Text>
        </View>
        {
          popular.results.length > 1
            ? (
              <View style={{ height: 150 }}>
                <Carousel
                  loop
                  data={popular.results}
                  loopClonesPerSide={5}
                  enableSnap
                  renderItem={({ item, index }) => renderPopular({
                    item,
                    index,
                    imgUrl,
                    popularIndex,
                    setPopLoading,
                    loadingPopular,
                    lists: popular.results,
                  })}
                  autoplay
                  autoplayInterval={5000}
                  sliderWidth={WINDOW.width}
                  itemWidth={100}
                  contentContainerCustomStyle={{
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                  inactiveSlideOpacity={0.3}
                  inactiveSlideScale={1}
                  removeClippedSubviews
                  lockScrollWhileSnapping
                  directionalLockEnabled
                  horizontal
                />
              </View>
            )
            : (
              <ShimmerPlaceHolder
                autoRun
                visible={popular.results.length > 0}
                width={WINDOW.width}
                height={150}
                style={{ alignSelf: 'center' }}
              />
            )
        }
        <View
          padding-8
          marginT-32
          marginB-8
          style={{
            backgroundColor: colors.yellow,
          }}
        >
          <Text>Now Playing</Text>
        </View>
        <View style={{ height: 250 }}>
          {
            nowPlaying.results.length > 1
              ? (
                <Carousel
                  loop
                  data={nowPlaying.results.slice(0, 10)}
                  loopClonesPerSide={5}
                  onSnapToItem={setNPIndex}
                  enableSnap
                  renderItem={({ item, index }) => renderNowPlaying({
                    item,
                    index,
                    imgUrl,
                    nowPlayingIndex,
                    setNPLoading,
                    loadingNowPlaying,
                  })}
                  sliderWidth={WINDOW.width}
                  itemWidth={150}
                  contentContainerCustomStyle={{
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                  removeClippedSubviews
                  lockScrollWhileSnapping
                  directionalLockEnabled
                  horizontal
                />
              )
              : (
                <ShimmerPlaceHolder
                  autoRun
                  visible={nowPlaying.results.length > 0}
                  width={150}
                  height={250}
                  style={{ alignSelf: 'center' }}
                />
              )
          }
        </View>
        <View padding-16 center>
          <ShimmerPlaceHolder autoRun visible={nowPlaying.results.length > 0}>
            <View style={{ flexDirection: 'row' }}>
              <Text h2 bold>
                {
                  nowPlaying.results.length <= 0
                    ? ''
                    : `${nowPlaying.results[nowPlayingIndex].original_title} • `
                }
              </Text>
              <StarRatingBar
                maximumValue={1}
                score={nowPlaying.results.length <= 0
                  ? ''
                  : nowPlaying.results[nowPlayingIndex].vote_average / 10.0}
                dontShowScore
                allowsHalfStars
                accurateHalfStars
              />
              <Text h2 bold>
                {`${nowPlaying.results.length <= 0 ? '' : nowPlaying.results[nowPlayingIndex].vote_average.toFixed(1)}`}
              </Text>
            </View>
          </ShimmerPlaceHolder>
          <ShimmerPlaceHolder autoRun visible={nowPlaying.results.length > 0}>
            <Text h3 lightGray>
              {
                nowPlaying.results.length <= 0
                  ? ''
                  : nowPlaying.results[nowPlayingIndex]
                    .genre_ids.map(genre => genres.find(g => g.id === genre).name).join(', ')
              }
            </Text>
          </ShimmerPlaceHolder>
        </View>
        <View
          padding-8
          marginT-16
          marginB-8
          style={{
            backgroundColor: colors.red,
          }}
        >
          <Text>Top Rated Movies</Text>
        </View>
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={topRated.results.slice(0, 3)}
          renderItem={({ item }) => renderTopRated({
            item,
            loadingTopRated,
            setTRLoading,
            imgUrl,
            genres
          })}
          ListEmptyComponent={() => renderTopRated({
            item: {
              genre_ids: [],
              vote_average: 0,
              vote_count: 0,
              overview: '',
            },
            forceLoading: true,
            imgUrl,
            loadingTopRated: true,
          })}
        />
        <View
          padding-8
          marginT-16
          marginB-8
          style={{
            backgroundColor: colors.lightPurple,
          }}
        >
          <Text>Upcoming Movies</Text>
        </View>
        <View>
          {
            nowPlaying.results.length > 1
              ? (
                <Carousel
                  data={upcoming.results.slice(0, 10)}
                  onSnapToItem={setUCIndex}
                  enableSnap={false}
                  renderItem={({ item, index }) => renderUpcoming({
                    item,
                    index,
                    imgUrl,
                    upcomingIndex,
                    setUCLoading,
                    loadingUpcoming,
                    genres,
                  })}
                  activeSlideAlignment="start"
                  sliderWidth={WINDOW.width}
                  itemWidth={WINDOW.width * 0.8}
                  inactiveSlideScale={1}
                  inactiveSlideOpacity={1}
                  removeClippedSubviews
                  horizontal
                  useScrollView
                />
              )
              : (
                <ShimmerPlaceHolder
                  autoRun
                  visible={nowPlaying.results.length > 0}
                  width={WINDOW.width}
                  height={180}
                  style={{ alignSelf: 'center' }}
                />
              )
          }
        </View>
      </View>
    </ScrollView>
  );
};
