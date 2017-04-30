import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  View,
  Text,
} from 'react-native';

import {
  ImageWithText,
  BasicImage,
  AbsoluteImage,
} from './examples';

const remote = 'https://s15.postimg.org/tw2qkvmcb/400px.png';

export default class BackgroundImage extends Component {
  render() {
    const resizeMode = 'center';

    return (
      <ImageWithText resizeMode={resizeMode}>
        I am some centered text in a View
      </ImageWithText>
    );

  }
}

AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);
