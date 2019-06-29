// @flow
import React from 'react';
import {
  View,
  Text,
} from 'react-native-ui-lib';
import Carousel from 'react-native-snap-carousel';
import { WINDOW } from '../../env';

type Props = {};

const renderNowPlaying = ({ item, index }) => (
  <View />
);

export default (props: Props) => (
  <View flex>
    <Text>Now Playing</Text>
    <Carousel
      data={[]}
      renderItem={renderNowPlaying}
      sliderWidth={WINDOW.width}
      itemWidth={200}
    />
  </View>
);
