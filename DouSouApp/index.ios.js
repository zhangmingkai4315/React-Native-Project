/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import NavigatationCustom from './src/Common/NavigatationCustom';
import Book from './src/Book/BookList';
import Movie from './src/Movie/Movie';
import Music from './src/Music/Music';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBarIOS,
  TabBarIOS,
} from 'react-native';

StatusBarIOS.setHidden(true);  //隐藏头部的状态栏
class DouSouApp extends Component {
  constructor(props){
    super(props);
    this.state={
      selectedTab:'图书'
    }
  }
  render() {
    console.log(Icon.TabBarItemIOS)
    return (
      <TabBarIOS>
        <Icon.TabBarItemIOS
          title="图书"
          iconName="book"
          selected={this.state.selectedTab==='图书'}
          onPress={()=>{
            this.setState({
              selectedTab:'图书'
            });
          }}
          >
          <NavigatationCustom component={Book}/>
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="电影"
          iconName="film"
          selected={this.state.selectedTab==='电影'}
          onPress={()=>{
            this.setState({
              selectedTab:'电影'
            });
          }}
          >
          <NavigatationCustom component={Movie}/>
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="音乐"
          iconName="music"
          selected={this.state.selectedTab==='音乐'}
          onPress={()=>{
            this.setState({
              selectedTab:'音乐'
            });
          }}
          >
          <NavigatationCustom component={Music}/>
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('DouSouApp', () => DouSouApp);
