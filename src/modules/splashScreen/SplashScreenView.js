// @flow
import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native-ui-lib';
import { View as AnimatableView } from 'react-native-animatable';
import { WINDOW } from '../../env';

const app = require('../../../package.json');

type Props = {};

const icon = require('../../../assets/images/icon.png');

export default (props: Props) => {
  const { children, refSplash, zIndex } = props;
  return (
    <View style={{ flex: 1 }}>
      <AnimatableView
        // locations={[0.5, 1]}
        style={[{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          flex: 1,
          width: WINDOW.width,
          height: WINDOW.height,
          backgroundColor: '#fff',
        }, { zIndex, opacity: 1 }]}
        useNativeDriver
        ref={view => refSplash(view)}
      >
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
      </AnimatableView>
      {children}
    </View>
  );
};
