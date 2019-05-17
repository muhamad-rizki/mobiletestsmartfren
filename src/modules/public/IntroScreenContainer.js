import React, { Component } from 'react';
import { Text } from 'react-native';
import SafeAreaView from '../../components/SafeAreaView';

export default class IntroScreenContainer extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <SafeAreaView>
        <Text> This is Intro Screen </Text>
      </SafeAreaView>
    );
  }
}
