// @flow
import React from 'react';
import {
  View,
  Text,
  Avatar,
  AvatarHelper,
} from 'react-native-ui-lib';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import StarRatingBar from 'react-native-star-rating-view/StarRatingBar';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

import { colors } from '../styles';

type Props = {}

const renderPopPerson = (data) => {
  const {
    item,
    imgUrl,
    loadingPopPerson,
    setPPLoading,
    forceLoading,
    activeTabIndex,
    tabIndex,
    onPress,
  } = data;
  return (
    <View flex>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => onPress && onPress(item)}
        disabled={forceLoading || loadingPopPerson}
      >
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            borderWidth: 0.5,
            borderColor: colors.lightGray,
          }}
          margin-4
          paddingV-12
          paddingH-8
          br40
        >
          <View paddingR-12 style={{ flex: 0.4 }} center>
            <ShimmerPlaceHolder
              autoRun={activeTabIndex === tabIndex}
              visible={!loadingPopPerson || !forceLoading}
              height={130}
              style={{
                alignSelf: 'center',
                flex: 1,
                width: '100%',
                marginHorizontal: 8,
              }}
            >
              <Avatar
                imageSource={{ uri: `${imgUrl}/w154/${item.profile_path}` }}
                onImageLoadEnd={() => (loadingPopPerson || !forceLoading) && setPPLoading(false)}
                size={50}
                label={AvatarHelper.getInitials(item.name)}
                labelColor={colors.secondary}
              />
            </ShimmerPlaceHolder>
          </View>
          <View style={{ flex: 0.6 }}>
            <ShimmerPlaceHolder
              autoRun={activeTabIndex === tabIndex}
              visible={!forceLoading}
              style={{ flex: 1, width: '100%' }}
              height={130}
            >
              <Text bold>{item.name}</Text>
              <View style={{ flexDirection: 'row' }}>
                <StarRatingBar
                  maximumValue={1}
                  score={1}
                  dontShowScore
                  allowsHalfStars
                  accurateHalfStars
                  spacing={2}
                  starStyle={{
                    width: 10,
                    height: 10,
                  }}
                />
                <Text small>
                  {` • ${item.popularity}`}
                </Text>
              </View>
            </ShimmerPlaceHolder>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const emptyComponent = () => renderPopPerson({
  item: {
    genre_ids: [],
    vote_average: 0,
    vote_count: 0,
    overview: '',
  },
  forceLoading: true,
  imgUrl: 'https://image.tmdb.org/t/p/',
  loadingPopPerson: true,
  setPPLoading: () => { }
});

const keyExtractor = item => item.id.toString();

let renderItem = null;

export default (props: Props) => {
  const {
    popPerson,
    loadingPopPerson,
    setPPLoading,
    imgUrl,
    genres,
    onPress,
  } = props;

  if (!renderItem) {
    renderItem = ({ item }) => renderPopPerson({
      item,
      loadingPopPerson,
      setPPLoading,
      imgUrl,
      genres,
      onPress,
    });
  }

  return (
    <FlatList
      contentContainerStyle={{ padding: 8 }}
      numColumns={2}
      keyExtractor={keyExtractor}
      data={popPerson.results.slice(0, 6)}
      maxToRenderPerBatch={5}
      initialNumToRender={5}
      onEndReachedThreshold={0.5}
      windowSize={1}
      renderItem={renderItem}
      ListEmptyComponent={emptyComponent}
    />
  );
};
