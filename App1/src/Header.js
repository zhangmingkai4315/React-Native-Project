import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';



class Header extends Component{
  render(){
    return(
      <View style={styles.flex}>

      <Text style={styles.font_1}>网易</Text>
      <Text style={styles.font_2}>新闻</Text>
      <Text style={styles.font_3}>有态度·</Text>
    </View>);
  }
}


const styles=StyleSheet.create({
    flex:{
      flexDirection:'row',
      marginTop:25,
      height:30,
      alignItems:'center',
      justifyContent:'center',
      borderBottomColor:'grey',
      borderBottomWidth:2,
    },
    font_1:{
      fontSize:20,
      fontWeight:"bold",
      textAlign:'center',
    },
    font_2:{
      color:'#fff',
      fontSize:20,
      backgroundColor:'#cd1d1c',
    },
    font_3:{
      fontSize:20,
      fontWeight:"bold",
      textAlign:'center',
    }

});

export default Header;
