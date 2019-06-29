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
        height: 300,
        width: 200,
      }}
      centerV
      centerH
    >
      <ShimmerPlaceHolder
        autoRun
        visible={!loadingNowPlaying}
        width={200}
        height={300}
        style={{ alignSelf: 'center' }}
      >
        <Image
          onLoadEnd={() => setNPLoading(false)}
          style={{
            width: 200,
            height: 300,
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
  } = props;
  return (
    <ScrollView>
      <View>
        <View
          padding-8
          marginV-16
          style={{
            backgroundColor: colors.yellow,
          }}
        >
          <Text>Now Playing</Text>
        </View>
        <View style={{ height: 300 }}>
          {
            nowPlaying.results.length > 1
              ? (
                <Carousel
                  loop
                  data={nowPlaying.results}
                  loopClonesPerSide={nowPlaying.results.length + 1}
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
                  itemWidth={200}
                  contentContainerCustomStyle={{
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                  shouldOptimizeUpdates
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
                  width={200}
                  height={300}
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
                {`${nowPlaying.results.length <= 0 ? '' : nowPlaying.results[nowPlayingIndex].vote_average}`}
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
