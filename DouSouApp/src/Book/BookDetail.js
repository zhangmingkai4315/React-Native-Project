import React, { Component } from 'react';
import {
  PixelRatio,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
export default class BookDetail extends Component{
  render(){
    return(
      <View>
        <Text>
          {this.props.id}
        </Text>
      </View>
    )
  }
}
