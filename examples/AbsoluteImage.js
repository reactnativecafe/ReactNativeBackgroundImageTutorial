import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
} from 'react-native';

const remote = 'https://s15.postimg.org/tw2qkvmcb/400px.png';

export default class AbsoluteImage extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#eee',
        }}
      >
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            style={{
              flex: 1,
              resizeMode: this.props.resizeMode,
            }}
            source={{ uri: remote }}
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontSize: 40,
            }}
          >
            {this.props.children}
          </Text>
        </View>
      </View>
    );
  }
}
