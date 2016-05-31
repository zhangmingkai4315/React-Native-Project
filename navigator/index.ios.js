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
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';



class navigator extends Component {
  constructor(props){
    super(props);
    this.OnRightButtonPress=this.OnRightButtonPress.bind(this);
  }
  OnRightButtonPress(){
    this.refs.nav.push({
      title:'From Right',
      component:ForRightScene
    })
  }
  render(){
    return (<NavigatorIOS ref="nav" style={styles.container}
          initialRoute={{
            component:HomeScene,
            title:'Navigator Demo',
            rightButtonTitle:'More',
            onRightButtonPress:this.OnRightButtonPress
          }}/>);
  }
}


class HomeScene extends Component {
  constructor(props){
    super(props);
    this.onPress=this.onPress.bind(this);
  }
  onPress(){
    this.props.navigator.push({
      title:'From TouchableHighlight',
      component:ForTouchScene
    });
  }
  render() {
    return (
      <View style={[styles.scene,{backgroundColor:"#daf6ff"}]}>
        <TouchableHighlight onPress={this.onPress}>
          <Text>Welcome to the NavigatorIOS demo, press here</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

class ForRightScene extends Component{
  render(){
    return (<View style={[styles.scene,{backgroundColor:"#fff1e8"}]}>
      <Text>You come here from right</Text>
    </View>);
  }
}
class ForTouchScene extends Component{
  render(){
    return (<View style={[styles.scene,{backgroundColor:"#fff1e8"}]}>
      <Text>You come here from TouchableHighlight</Text>
    </View>);
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1
  },
  scene:{
    flex:1,
    padding:10,
    paddingTop:74,
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

AppRegistry.registerComponent('navigator', () => navigator);
