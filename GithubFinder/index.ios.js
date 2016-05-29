/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

class GithubFinder extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            欢迎使用GithubFinder!
        </Text>

        <Image source={{uri:'http://up.ekoooo.com/uploads2/allimg/080000/080730/07325120.png'}}
          style={styles.customimg}
          ></Image>

      </View>
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
  customimg:{
    width:100,
    height:100,
  },
});

AppRegistry.registerComponent('GithubFinder', () => GithubFinder);
