
import SearchUrl from '../Common/service';
import Search from './../Common/Search';
import util from './../Common/util';
import BookItem from './BookItem';
import BookDetail from './BookDetail';
import React, { Component } from 'react';
import {
  PixelRatio,
  StyleSheet,
  Text,
  View,
  Navigator,
  ListView,
  ScrollView,
  TouchableOpacity
} from 'react-native';
export default class BookList extends Component{
    constructor(props){
      super(props)
      const ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2});
      this.state={
        dataSource:ds.cloneWithRows([]),
        keywords:'react',
        show:false
      };
      this._loadPage=this._loadPage.bind(this);
      this.getData=this.getData.bind(this);
      this._changeText=this._changeText.bind(this);
      this._renderRow=this._renderRow.bind(this);
    }
    componentDidMount(){
      this.getData();
    }
    _renderRow(row){
      return <BookItem row={row} onPress={this._loadPage.bind(this,row.id)}/>
    }
    _changeText(val){
      this.setState({
        keywords:val
      });
    }
    _loadPage(id){
      this.props.navigator.push({
        component:BookDetail,
        passProps:{
          id:id
        }
      });
    }
    getData(){
      const ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
      const baseUrl=SearchUrl.book_search+'?count=5&q='+this.state.keywords;
      this.setState({
        show:false
      });
      util.get(baseUrl,data=>{
        if(!data.books||!data.books.length){
          return alert('图书服务器暂时无法响应');
        }
        let books=data.books;
        this.setState({
          dataSource:ds.cloneWithRows(books),
          show:true
        });
      },err=>{
        alert(err);
      })
    }
    render(){
      let listRender=util.loading;
      if(this.state.show){
        listRender=<ListView dataSource={this.state.dataSource} renderRow={this._renderRow}/>
      }
      return (
        <ScrollView style={{flex:1,marginTop:5}}>
          <View style={[styles.search,styles.row]}>
            <View style={{flex:1}}>
              <Search placeholder="请输入搜索图书名称" onChangeText={this._changeText}/>
            </View>
            <TouchableOpacity style={styles.btn} onPress={this.getData}>
              <Text style={styles.fontFFF}>搜索</Text>
            </TouchableOpacity>
          </View>
          {listRender}
        </ScrollView>
      )
    }

}



const styles=StyleSheet.create({
  search:{
    paddingLeft:5,
    paddingRight:5,
    height:45,
  },
  btn:{
    width:50,
    backgroundColor:'#0091ff',
    justifyContent:'center',
    alignItems:'center'
  },
  fontFFF:{
    color:'#fff',
  },
  row:{
    flexDirection:'row'
  }
})
