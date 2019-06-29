// @flow
import React from 'react';
import {
  View,
  Text,
} from 'react-native-ui-lib';
import { ScrollView } from 'react-native-gesture-handler';
import Image from 'react-native-fast-image';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import StarRatingBar from 'react-native-star-rating-view/StarRatingBar';
import Carousel from 'react-native-snap-carousel';
import { WINDOW } from '../../env';
import { colors } from '../../styles';

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
          source={{ uri: `${imgUrl}/w342/${item.poster_path}` }}
        />
      </ShimmerPlaceHolder>
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
    setPopIndex,
    setPopLoading,
  } = props;
  return (
    <ScrollView>
      <View>
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
                  onSnapToItem={setPopIndex}
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
          marginT-16
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
                    : `${nowPlaying.results[nowPlayingIndex].title} • `
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
      </View>
    </ScrollView>
  );
};
