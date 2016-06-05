
import React, { Component } from 'react';
import util from 'util';
import Header from './Header';
import {
  View,
  WebView
} from 'react-native';


export default class WebViewCustom extends Component {
  render(){
    return (
      <View>
      <Header
        navigator={this.props.navigator}
        initObj={
          backName:this.props.backName,
          title:this.props.title
        }
      ></Header>
      <WebView contentInset={{top:-40}}
        startInLoading={true}
        style={{width:util.size.width,height:util.size.height-50}}
        url={this.props.url}
      ></WebView>
      </View>
    )
  }
}
