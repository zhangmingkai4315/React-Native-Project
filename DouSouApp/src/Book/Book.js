import React, { Component } from 'react';
import {
  PixelRatio,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import BookList from './BookList';
export default class Book extends Component {
  render () {
    return (
      <View>
      <BookList {...this.props}/>
      </View>
    )
  }
}

export default Book
