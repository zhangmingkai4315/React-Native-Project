import util from './util'
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class LeftIcon extends Component{
  render(){
    return (
      <View style={styles.go}>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  go:{
    borderLeftWidth:4*util.pixel,
    borderBottomWidth:4*util.pixel,
    width:15,
    height:15,
    transform:[{ritate:'45deg'}],
    borderColor:'#fff',
    marginLeft:10,
  }
});
