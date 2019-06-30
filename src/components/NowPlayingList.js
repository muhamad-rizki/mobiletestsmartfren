// @flow
import { compose, lifecycle } from 'recompose';
import React from 'react';
import {
  View,
  Text,
} from 'react-native-ui-lib';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import Carousel from 'react-native-snap-carousel';
import FastImage from 'react-native-fast-image';
import StarRatingBar from 'react-native-star-rating-view/StarRatingBar';

import { WINDOW } from '../env';

type Props = {}

const renderNowPlaying = (data) => {
  const {
    item,
    imgUrl,
    loadingNowPlaying,
    setNPLoading,
    activeTabIndex,
    tabIndex,
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
        autoRun={activeTabIndex === tabIndex}
        visible={!loadingNowPlaying}
        width={150}
        height={250}
        style={{ alignSelf: 'center' }}
      >
        <FastImage
          onLoadEnd={() => setNPLoading(false)}
          style={{
            width: 150,
            height: 250,
          }}
          resizeMode={FastImage.resizeMode.cover}
          source={{ uri: `${imgUrl}/w342/${item.poster_path}` }}
        />
      </ShimmerPlaceHolder>
    </View>
  );
};

const Recomposed = compose(
  lifecycle({
    shouldComponentUpdate() {
      const {
        loadingNowPlaying,
      } = this.props;
      if (loadingNowPlaying === false) {
        return true;
      }
      return false;
    },
  })
)(renderNowPlaying);

export default (props: Props) => {
  const {
    nowPlaying,
    setNPIndex,
    // imgUrl,
    nowPlayingIndex,
    // setNPLoading,
    // loadingNowPlaying,
    genres,
    activeTabIndex,
    tabIndex,
  } = props;
  return (
    <View>
      <View style={{ height: 250 }}>
        {
          nowPlaying.results.length > 1
            ? (
              <Carousel
                loop
                data={nowPlaying.results.slice(0, 10)}
                onSnapToItem={setNPIndex}
                enableSnap
                renderItem={data => <Recomposed {...props} {...data} />}
                sliderWidth={WINDOW.width}
                itemWidth={150}
                contentContainerCustomStyle={{
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                maxToRenderPerBatch={1}
                initialNumToRender={1}
                removeClippedSubviews
                lockScrollWhileSnapping
                directionalLockEnabled
                horizontal
              />
            )
            : (
              <ShimmerPlaceHolder
                autoRun={activeTabIndex === tabIndex}
                visible={nowPlaying.results.length > 0}
                width={150}
                height={250}
                style={{ alignSelf: 'center' }}
              />
            )
        }
      </View>
      <View padding-16 center>
        <ShimmerPlaceHolder
          autoRun={activeTabIndex === tabIndex}
          visible={nowPlaying.results.length > 0}
        >
          <View style={{ flexDirection: 'row' }}>
            <Text h2 bold>
              {
                nowPlaying.results.length <= 0
                  ? ''
                  : `${nowPlaying.results[nowPlayingIndex].original_title || nowPlaying.results[nowPlayingIndex].original_name} • `
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
        <ShimmerPlaceHolder
          visible={nowPlaying.results.length > 0}
          autoRun={activeTabIndex === tabIndex}
        >
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
  );
};
