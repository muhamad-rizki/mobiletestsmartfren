import React, { Component } from 'react';
import { Text } from 'react-native';
import SafeAreaView from '../../components/SafeAreaView';

export default class SplashScreenContainer extends Component {
  componentDidMount() {
    setTimeout(this.resetToAuth, 3000);
  }

  render() {
    return (
      <SafeAreaView>
        <Text> This is Splash Screen </Text>
      </SafeAreaView>
    );
  }
}
