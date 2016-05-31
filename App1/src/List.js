import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
const List = React.createClass({
  render () {
    return (
      <View style={styles.list_item}>
        <Text style={styles.list_item_font}>{this.props.title}</Text>
      </View>
    )
  }
})

const styles=StyleSheet.create({
  list_item:{
    justifyContent:'center',
    marginLeft:10,
    marginRight:10,
    height:40,
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
  },
  list_item_font:{
    fontSize:16
  }
})
export default  List
