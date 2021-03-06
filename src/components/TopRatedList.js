// @flow
import React from 'react';
import {
  View,
  Text,
} from 'react-native-ui-lib';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import StarRatingBar from 'react-native-star-rating-view/StarRatingBar';
import FastImage from 'react-native-fast-image';
import Icon from './Icon';

import { isEmpty, makeThousand } from '../env';

type Props = {}

const renderTopRated = (data) => {
  const {
    item,
    imgUrl,
    loadingTopRated,
    setTRLoading,
    genres,
    forceLoading,
    tabIndex,
    activeTabIndex,
    onPress,
  } = data;
  return (
    <View style={{ flexDirection: 'row', }} padding-8>
      <View paddingR-12 style={{ flex: 0.2 }}>
        <ShimmerPlaceHolder
          autoRun={activeTabIndex === tabIndex}
          visible={!loadingTopRated || !forceLoading}
          height={130}
          style={{
            alignSelf: 'center',
            flex: 1,
            width: '100%',
            marginHorizontal: 8,
          }}
        >
          <FastImage
            source={{ uri: `${imgUrl}/w92/${item.poster_path}` }}
            onLoadEnd={() => (loadingTopRated || !forceLoading) && setTRLoading(false)}
            style={{
              width: 80,
              height: 130,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </ShimmerPlaceHolder>
      </View>
      <View style={{ flex: 0.8 }}>
        <ShimmerPlaceHolder
          autoRun={activeTabIndex === tabIndex}
          visible={!forceLoading}
          style={{ flex: 1, width: '100%' }}
          height={130}
        >
          <Text>{item.original_title || item.original_name}</Text>
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
          <TouchableWithoutFeedback
            onPress={() => onPress && onPress(item)}
          >
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

const emptyComponent = () => renderTopRated({
  item: {
    genre_ids: [],
    vote_average: 0,
    vote_count: 0,
    overview: '',
  },
  forceLoading: true,
  imgUrl: 'https://image.tmdb.org/t/p/',
  loadingTopRated: true,
  setTRLoading: () => { }
});

const keyExtractor = item => item.id.toString();

let renderItem = null;

export default (props: Props) => {
  const {
    topRated,
    loadingTopRated,
    setTRLoading,
    imgUrl,
    genres,
    onPress,
  } = props;

  if (!renderItem) {
    renderItem = ({ item }) => renderTopRated({
      item,
      loadingTopRated,
      setTRLoading,
      imgUrl,
      genres,
      onPress,
    });
  }

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={topRated.results.slice(0, 3)}
      renderItem={renderItem}
      maxToRenderPerBatch={5}
      initialNumToRender={5}
      onEndReachedThreshold={0.5}
      windowSize={1}
      scrollEnabled={false}
      pinchGestureEnabled={false}
      ListEmptyComponent={emptyComponent}
    />
  );
};
