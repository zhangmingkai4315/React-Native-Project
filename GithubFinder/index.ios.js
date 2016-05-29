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
  ListView,
  TextInput
} from 'react-native';
const BASE_URL='https://api.github.com/search/repositories?q=';
class GithubFinder extends Component {
  constructor(props){
    super(props);
    this.state={
      dataSource:new ListView.DataSource({rowHasChanged:(row1,row2)=>row1!==row2})
    };
    this.onSearchChange=this.onSearchChange.bind(this);
    this.renderRow=this.renderRow.bind(this);
    this.renderLoadingView=this.renderLoadingView.bind(this);
  }
  onSearchChange(event){
    let searchTerm=event.nativeEvent.text.toLowerCase();
    let queryURL=BASE_URL+encodeURIComponent(searchTerm);
    // console.log(queryURL)
    fetch(queryURL).then((response)=>response.json())
                   .then((responseData)=>{
                     if(responseData.items){
                       this.setState({
                         dataSource:this.state.dataSource.cloneWithRows(responseData.items)
                       });
                     }
                   }).done();
  }
  renderRow(repo){
    return (<View>
              <View style={styles.row}>
                <Image source={{uri:repo.owner.avatar_url}}
                       style={styles.profilePic}/>
                <View style={styles.textcontainer}>
                     <Text style={styles.title}>{repo.name}</Text>
                     <Text style={styles.subtitle}>{repo.owner.login}</Text>
               </View>
             </View>
             <View style={styles.cellBorder}/>
            </View>)
  }
  renderLoadingView(){
    return(
          <View style={styles.container_middle}>
            <Text>
              Loading ...
            </Text>
          </View>);
  }
  render() {
    let content;
    if (this.state.dataSource.getRowCount()===0){
      content=(<Text>Please enter a search item to see!</Text>)
    }else{
      content=<ListView ref='listview' dataSource={this.state.dataSource}
                        renderRow={this.renderRow}
                        automaticallyAdjustContentInsets={false}
                        keyboardShouldPersistTaps={true}
                        keyboardDismissMode="onDrag"
                        showsVerticalScrollIndicator={true}/>
    }
    return (
      <View style={styles.container}>
        <TextInput autoCapitalize="none" autoCorrect={false} placeholder="Search for a project"
          style={styles.searchBarInput}
          onEndEditing={this.onSearchChange}
        />

        {content}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container_middle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  searchBarInput:{
    marginTop:30,
    padding:5,
    fontSize:15,
    height:30,
    backgroundColor:"#EAEAEA"
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
  row:{
    alignItems:'center',
    backgroundColor:'white',
    flexDirection:'row',
    padding:5,
  },
  cellBorder:{
    backgroundColor:'rgba(0,0,0,0.1)',
    height:1,
    marginLeft:4,
  },
  profilePic:{
    width:50,
    height:50,
  },
  title:{
    fontSize:20,
    marginTop:8,
    fontWeight:'bold',
  },
  subtitle:{
    fontSize:16,
    marginBottom:8,
  },
  textcontainer:{
    paddingLeft:10,
  },
  blanktext:{
    padding:10,
    fontSize:20,
  }

});

AppRegistry.registerComponent('GithubFinder', () => GithubFinder);
