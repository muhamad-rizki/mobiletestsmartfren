// @flow
import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native-ui-lib';

const app = require('../../../package.json');

type Props = {};

const icon = require('../../../assets/images/icon.png');

export default (props: Props) => (
  <View flex centerV centerH padding-16>
    <Image
      width={100}
      height={100}
      resizeMode="center"
      source={icon}
    />
    <Text marginT-24 h1 secondary bold>LayarKaca21.id</Text>
    <Text h2 secondaryLight>a one place catalog of Movies and TV Show</Text>
    <Text absoluteBottomSmall>{`Powered by TMDB - v${app.version}`}</Text>
  </View>
);
