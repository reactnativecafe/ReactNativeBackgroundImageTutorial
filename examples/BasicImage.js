import React, { Component } from 'react';
import {
  Image,
} from 'react-native';

const remote = 'https://s15.postimg.org/tw2qkvmcb/400px.png';

export default class BasicImage extends Component {
  render() {
    return (
      <Image
        style={{
          flex: 1,
          resizeMode: this.props.resizeMode,
        }}
        source={{ uri: remote }}
      />
    );
  }
}
