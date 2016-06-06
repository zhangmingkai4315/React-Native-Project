
import React, { Component } from 'react';
import util from 'util';
import {
  PixelRatio,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  TextInput
} from 'react-native';

export default class Search extends Component{
  render (){
    return (
      <View style={{flex:1}}>
        <TextInput style={sytles.input} {...this.props}/>
      </View>
    )
  }
};

const sytles=StyleSheet.create({
  input:{
    flex:1,
    borderWidth:util.pixel,
    height:40,
    borderColor:'#DDDDDD',
    paddingLeft:5,
  }
});
