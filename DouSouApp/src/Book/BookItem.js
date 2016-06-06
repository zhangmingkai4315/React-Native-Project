import React, { PropTypes } from 'react';
import util from '../Common/util';
import {
  Image,
  ListView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';

class BookItem extends React.Component {
  render () {
    const row = this.props.row;
    return (
      <TouchableOpacity style={[styles.row,styles.item]} {...this.props}>
        <View style={[styles.center]}>
          <Image source={{uri:row.image}} style={styles.book_img}/>
        </View>
        <View style={styles.content}>
          <Text style={{width:200}} numberOfLines={1}>{row.title}</Text>
        </View>
        <View style={{marginTop:10}}>
          <Text style={[styles.publisher,{width:200}]} numberOfLines={1}>{row.publisher}</Text>
        </View>
        <View style={{marginTop:10}}>
          <Text style={[styles.author,{width:200}]} numberOfLines={1}>{row.author}</Text>
        </View>
        <View style={[styles.row,{marginTop:10,width:200}]}>
          <Text style={[styles.price]} numberOfLines={1}>{row.price}</Text>
          <Text style={[styles.pages]} numberOfLines={1}>{row.pages}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
const styles=StyleSheet.create({
  row:{
    flexDirection:'row'
  },
  center:{
    justifyContent:'center',
    alignItems:'center'
  },
  item:{
    height:120,
    borderBottomWidth:util.pixel,
    borderTopWidth:util.pixel,
    marginTop:5,
    marginBottom:5,
    borderColor:'#ccc',
  },
  book_img:{
    width:80,
    height:100,
    resizeMode:Image.resizeMode.contain
  },
  content:{
    marginTop:10,
    marginLeft:10,
  },
  publisher:{
    color:'#a3a3a3',
    fontSize:13,
  },
  author:{
    color:'#a3a3a3',
    fontSize:12,
  },
  price:{
    color:'#2b2b2b',
    fontSize:16
  },
  pages:{
    marginLeft:10,
    color:'#a7a0a0',
  }
})




export default BookItem;
