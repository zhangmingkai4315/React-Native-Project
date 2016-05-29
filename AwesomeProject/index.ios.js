/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  ListView,
  Text,
  View
} from 'react-native';

var MOCKED_MOVIES_DATA=[
  {title:'Title',year:2013,posters:{thumbnail:'http://i.imgur.com/UePbdph.jpg'}}
];
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class AwesomeProject extends Component {
  constructor(props){
    super(props);
    this.state={
      dataSource:new ListView.DataSource({rowHasChanged:(row1,row2)=>row1!==row2}),
      loaded:false,
    };
  }
  fetchData(){
    fetch(REQUEST_URL).then((response)=>response.json())
    .then((responseData)=>{
      this.setState({
        // {/* movies:responseData.movies */}
        dataSource:this.state.dataSource.cloneWithRows(responseData.movies),
        loaded:true,
      });
    }).done(); //确保所有的异常得到处理
  }
  componentDidMount() {
    this.fetchData()
  }
  renderMovie(movie){
    return (
      <View style={styles.container}>

        <Image source={{uri:movie.posters.thumbnail}} style={styles.thumbnail}/>
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
     </View>
    );
  }
  renderLoadingView(){
    return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>);
  }
  render() {
    // var movie=MOCKED_MOVIES_DATA[0];
    // if(!this.state.movies){
    //   return this.renderLoadingView();
    // }
    // var movie=this.state.movies[0];
    // return this.renderMovie(movie);
    if (!this.state.loaded) {
       return this.renderLoadingView();
     }

     return (
       <ListView
         dataSource={this.state.dataSource}
         renderRow={this.renderMovie}
         style={styles.listView}
       />
     );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer:{
    flex:1,
  },
  title:{
    fontSize:20,
    marginBottom:8,
    textAlign:'center'
  },
  year:{
    textAlign:'center',
  },
  listView: {
   paddingTop: 20,
   backgroundColor: '#F5FCFF',
 },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  thumbnail:{
    width:53,
    height:81,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
