/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Header from './src/Header';
import List from './src/List';
import ImportantNews from './src/ImportantNews';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  PixelRatio,
  NavigatorIOS
} from 'react-native';




class App1 extends Component {
  render() {
    return (
      <ScrollView style={styles.flex}>
        <View style={styles.container}>
          <View style={[styles.item,styles.center]}>
            <Text style={styles.font}>酒店</Text>
          </View>
          <View style={styles.item,styles.lineLR}>
            <View style={[styles.center,styles.flex,styles.lineCenter]}>
              <Text style={styles.font}>海外酒店</Text>
            </View>
            <View style={[styles.center,styles.flex]}>
              <Text style={styles.font}>特惠酒店</Text>
            </View>
          </View>
          <View style={styles.item,styles.lineLR}>
            <View style={[styles.center,styles.flex,styles.lineCenter]}>
              <Text style={styles.font}>团购</Text>
            </View>
            <View style={[styles.center,styles.flex]}>
              <Text style={styles.font}>客栈</Text>
            </View>
          </View>
        </View>


        <Header></Header>

        <List title="Hello world" nav={this.props.navigator}></List>
        <List title="Welcome to react native world" nav={this.props.navigator}></List>
        <List title="This is a simple list show " nav={this.props.navigator}></List>
        <ImportantNews news={[
            '1. this is a test','2. this is not a test',
            '3. this is a long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long test'
          ]}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop:80,
    marginLeft:5,
    marginRight:5,
    height:84,
    borderRadius:5,
    padding:2,
    flexDirection:'row',
    backgroundColor:'#daf6ff',
    borderColor:'grey',
    borderWidth:1
  },
  lineCenter:{
    borderBottomWidth:1/PixelRatio.get(),
    borderColor:'#fff',
  },
  flex:{
    flex:1
  },
  lineLR:{
    borderLeftWidth:1/PixelRatio.get(),
    borderRightWidth:1/PixelRatio.get(),
    height:80,
    borderColor:'#fff',
  },
  item:{
    flex:1,
    height:80,
  },
  font:{
    color:'grey',
    fontSize:15,
    paddingLeft:20,
    paddingRight:20,
    fontWeight:'bold'
  },
  center:{
    justifyContent:'center',
    alignItems:'center',
  },
});


class NV extends Component{
  render () {
    return (
      <NavigatorIOS
        style={{flex:1}}
        initialRoute={{
          component:App1,
          title:'首页',
          passProps:{},
        }}
      />
  );
  }
}





AppRegistry.registerComponent('App1', () => NV);
