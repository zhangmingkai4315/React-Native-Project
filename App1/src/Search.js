import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  PixelRatio,
} from 'react-native';
const onePT=1/PixelRatio.get();
const Search = React.createClass({
  getInitialState:function(){
   return {
      show:false,
      inputValue:'',
    };
  },
  getValue:function(text){
    this.setState({
      show:true,
      inputValue:text
    })
  },
  hide:function(text){
    this.setState({
      show:false,
      inputValue:text
    })
  },
  selectItem:function(text){
    console.log(text+" in select")
    this.setState({
      show:false,
      inputValue:text
    });
  },
  render :function() {
    let helperText='';

    if(this.state.show){
      const renderHelper=['酒店','度假村','宾馆'].map(function(item,i){
          let itemString=this.state.inputValue+item;
          console.log(itemString)
          return <Text style={styles.item} key={i} numberOfLines={1} onPress={this.selectItem.bind(this,itemString)}>
          {itemString}</Text>
      }.bind(this));

      helperText=<View style={[styles.result]}>{renderHelper}</View>;
   }else{
      helperText=<View></View>
   }
    return (
      <View style={styles.flex}>
      <View style={[styles.container]}>
        <View style={styles.flex}>
          <TextInput placeholder="请输入旅行目的地"
            onEndEditing={this.hide.bind(this,this.state.inputValue)}
            style={styles.input}
            returnKeyType="search"
            value={this.state.inputValue}
            onChangeText={this.getValue}
          />
        </View>
        <View style={styles.btn}>
            <Text style={styles.search} onPress={this.hide.bind(this,this.state.inputValue)}>搜索</Text>
        </View>

      </View>
      {helperText}
      </View>
    )
  }
});


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
  result:{
    marginTop:onePT,
    marginLeft:5,
    marginRight:5,
    height:200,
    borderColor:'#ccc',
    borderTopWidth:onePT,
  },
  item:{
    fontSize:16,
    padding:5,
    paddingTop:10,
    paddingBottom:10,
    borderWidth:onePT,
    borderColor:'#ccc',
    borderTopWidth:0,
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
