// @flow
import React from 'react';
import {
  View,
  Text,
} from 'react-native-ui-lib';
import Carousel from 'react-native-snap-carousel';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import FastImage from 'react-native-fast-image';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { colors } from '../styles';
import { WINDOW, isEmpty } from '../env';
import Icon from './Icon';

type Props = {}

const renderUpcoming = (data) => {
  const {
    item,
    imgUrl,
    loadingUpcoming,
    setUCLoading,
    genres,
    activeTabIndex,
    tabIndex,
    onPress,
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
          autoRun={activeTabIndex === tabIndex}
          visible={!loadingUpcoming}
          height={120}
          style={{ alignSelf: 'center', flex: 1, width: '100%' }}
        >
          <FastImage
            onLoadEnd={() => loadingUpcoming && setUCLoading(false)}
            style={{
              height: 120,
            }}
            resizeMode={FastImage.resizeMode.cover}
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
          autoRun={activeTabIndex === tabIndex}
          visible={!loadingUpcoming}
          style={{ flex: 1, width: '100%' }}
        >
          <Text>{item.original_title || item.original_name}</Text>
          <Text lightGray>{isEmpty(item.genre_ids.map(genre => genres.find(g => g.id === genre).name).join(', '), 'No Category')}</Text>
          <TouchableWithoutFeedback
            onPress={() => onPress && onPress(item)}
            disabled={loadingUpcoming}
          >
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
    upcoming,
    setUCIndex,
    setUCLoading,
    imgUrl,
    upcomingIndex,
    loadingUpcoming,
    genres,
    activeTabIndex,
    tabIndex,
    onPress,
  } = props;
  return (
    <View>
      {
        upcoming.results.length > 1
          ? (
            <Carousel
              data={upcoming.results.slice(0, 10)}
              onSnapToItem={setUCIndex}
              enableSnap
              renderItem={({ item, index }) => renderUpcoming({
                item,
                index,
                imgUrl,
                upcomingIndex,
                setUCLoading,
                loadingUpcoming,
                genres,
                onPress,
              })}
              maxToRenderPerBatch={5}
              initialNumToRender={5}
              onEndReachedThreshold={0.5}
              windowSize={1}
              activeSlideAlignment="start"
              sliderWidth={WINDOW.width}
              itemWidth={WINDOW.width * 0.8}
              inactiveSlideScale={1}
              inactiveSlideOpacity={1}
              removeClippedSubviews
              horizontal
            />
          )
          : (
            <ShimmerPlaceHolder
              autoRun={activeTabIndex === tabIndex}
              visible={upcoming.results.length > 0}
              width={WINDOW.width}
              height={180}
              style={{ alignSelf: 'center' }}
            />
          )
      }
    </View>
  );
};
