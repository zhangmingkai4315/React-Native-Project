import Dimensions from 'Dimensions';
import React, { PropTypes } from 'react';
import {
  PixelRatio,
  ActivityIndicatorIOS
} from 'react-native';

 const util={
  pixel:1/PixelRatio.get(),
  size:{
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height
  },
  get:function(url,successCallback,failCallback){
    fetch(url).then(response=>response.text())
              .then(data=>{
                console.log(data);
                successCallback(JSON.parse(data));
              })
              .catch(err=>{
                failCallback(err);
              });
  },
  loading:<ActivityIndicatorIOS
          color='#3e00ff'
          style={{marginTop:40,marginLeft:Dimensions.get('window').width/2-10}}
        />
}
export default util;
