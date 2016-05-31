import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
class ImportantNews extends Component{
  constructor(props){
    super(props);
    this.show=this.show.bind(this);
  }
  show(...argus){
    alert(argus);
  }
  render () {
    let news=[];
    for (var i in this.props.news){
      var text=(
        <Text onPress={this.show.bind(this,this.props.news[i])} numberOfLines={2} style={styles.news_item}>
          {this.props.news[i]}
        </Text>
      );
      news.push(text);
    }
    return (
      <View style={styles.flex}>
        <Text style={styles.news_title}>今日要闻</Text>
        {news}
      </View>
    )
  }
}
const styles=StyleSheet.create({
  news_title:{
    fontSize:20,
    marginTop:20,
    marginLeft:10,
    marginRight:10,
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
    justifyContent:'center'
  },
  list_item_font:{
    fontSize:16
  },
  flex:{
    flex:1
  },
  news_item:{
    marginLeft:10,
    marginRight:10,
    fontSize:15,
    lineHeight:20,
  }
})
export default ImportantNews
