import React, { Component } from 'react';
import {
  Image,
  Text,
} from 'react-native';

const remote = 'https://s15.postimg.org/tw2qkvmcb/400px.png';

export default class ImageWithText extends Component {
  render() {
    return (
      <Image
        style={{
          backgroundColor: '#ccc',
          flex: 1,
          resizeMode: this.props.resizeMode,
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}
        source={{ uri: remote }}
      >
        <Text
          style={{
            backgroundColor: 'transparent',
            textAlign: 'center',
            fontSize: 30,
            padding: 40,
          }}
        >
          {this.props.children}
        </Text>
      </Image>
    );
  }
}
