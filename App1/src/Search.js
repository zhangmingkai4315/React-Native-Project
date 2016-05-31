import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
class Search extends Component {
  render () {
    return (
      <View style={[styles.container]}>
        <View style={styles.flex}>
          <TextInput style={styles.input} returnKeyType="search"/>
        </View>
        <View style={styles.btn}>
            <Text style={styles.search}>搜索</Text>
        </View>
      </View>
    )
  }
}


const styles=StyleSheet.create({
  flex:{
    flex:1
  },
  container:{
    flex:1,
    flexDirection:'row',
    marginTop:10,
    marginLeft:10,
    marginBottom:10,
  },
  input:{
    height:45,
    borderWidth:1,
    marginLeft:5,
    paddingLeft:5,
    borderColor:"#ccc",
    borderRadius:4
  },
  btn:{
    width:55,
    marginLeft:-5,
    marginRight:5,
    borderTopRightRadius:4,
    borderBottomRightRadius:4,
    backgroundColor:"#23beff",
    justifyContent:'center',
    alignItems:'center'
  },
  search:{
    color:'#fff',
    fontSize:15,
    fontWeight:'bold',
  }
})
export default Search
