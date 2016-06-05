
import React, { Component } from 'react';
import {
  PixelRatio,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';


export default class NavigatationCustom extends Component {
  render(){
    return (
      <Navigator
        initialRoute={{name:'',component:this.props.component,index:0}}
        configureScene={()=>{
          return Navigator.SceneConfigs.FloatFromBottom;
        }}
        renderScene={(route,navigator)=>{
          const ComponentInstance=route.component;
          return (
            <View style={{flex:1}}>
              <ComponentInstance navigator={navigator} {...route.passProps} route={route} />
            </View>
          );
        }}
      />
    );
  }
};
