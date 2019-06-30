// @flow
import React from 'react';
import {
  View,
  Text,
} from 'react-native-ui-lib';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import Carousel from 'react-native-snap-carousel';
import FastImage from 'react-native-fast-image';

import { colors } from '../styles';
import { WINDOW } from '../env';

type Props = {}

const renderPopular = (data) => {
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
        <FastImage
          onLoadEnd={() => popularIndex === (index - 5) && setPopLoading(false)}
          style={{
            width: 100,
            height: 150,
          }}
          resizeMode={FastImage.resizeMode.cover}
          source={{ uri: `${imgUrl}/w92/${item.poster_path}` }}
        />
      </ShimmerPlaceHolder>
    </View>
  );
};

export default (props: Props) => {
  const {
    popular,
    imgUrl,
    popularIndex,
    setPopLoading,
    loadingPopular,
  } = props;
  if (popular.results.length > 1) {
    return (
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
    );
  }
  return (
    <ShimmerPlaceHolder
      autoRun
      visible={popular.results.length > 0}
      width={WINDOW.width}
      height={150}
      style={{ alignSelf: 'center' }}
    />
  );
};
