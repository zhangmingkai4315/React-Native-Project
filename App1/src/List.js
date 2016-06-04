import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,Dimensions,WebView
} from 'react-native';
const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;
class Detail extends Component {

  render () {
    return (
      <ScrollView >
        <WebView injectedJavascript ="alert('hello')"
          bounces={true}
          url='http://baidu.com'
          style={{width:width,height:height}}
        ></WebView>
      </ScrollView>
    )
  }
}

class List extends Component {
  constructor(props){
    super(props);
    this.goto=this.goto.bind(this);
  }
  goto(){
      this.props.nav.push({
        component:Detail,
        title:'详细信息',
        rightButtonTitle:'查看',
        onRightButtonPress:function(){
          alert('点击了查看细节！');
        }
      })
  }
  render () {
    return (
      <View style={styles.list_item}>
        <Text style={styles.list_item_font} onPress={this.goto}>{this.props.title}</Text>
      </View>
    )
  }
}

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
