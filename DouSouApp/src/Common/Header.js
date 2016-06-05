
import React, { Component } from 'react';
import LeftIcon from './LeftIcon';
import util from './util';
import {
  PixelRatio,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class Header extends Component{
  render(){
    const obj=this.props.initObj;
    return (
      <View style={[styles.header,styles.row,styles.center]}>
        <TouchableOpacity style={[styles.row,styles.center]} onPress={this._pop}>
          <LeftIcon/>
          <Text style={styles.fontFFF}>{obj.backName}</Text>
        </TouchableOpacity>
        <View style ={[styles.title,styles.center]}>
          <Text style={[styles.fontFFF,styles.titlePos]} numberOfLines={1}>{obj.title}</Text>
        </View>
      </View>
    )
  }
  _pop(){
    this.props.navigator.pop();
  }
};

const styles=StyleSheet.create({
  center:{
    justifyContent:'center',
    alignItems:'center',
  },
  row:{
    flexDirction:'row'
  },
  header:{
    height:50,
    backgroundColor:'#3497ff',
  },
  fontFFF:{
    color:'#fff',
    fontSize:17,
    fontWeight:'bold',
  },
  title:{
    flex:1
  },
  titlePos:{
    marginLeft:-20,
    width:200
  }
});
