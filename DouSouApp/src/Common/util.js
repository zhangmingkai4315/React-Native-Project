import Dimensions from 'Dimensions';
import {
  PixelRatio,
  ActivityIndicatorIOS
} from 'react-native';

export default const util={
  pixel:1/PixelRatio.get(),
  size:{
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height
  },
  get:function(url,successCallback,failCallback){
    fetch(url).then(response=>response.text())
              .then(data=>{
                successCallback(JSON.parse(data));
              })
              .catch(err=>{
                failCallback(err);
              });
  },
  loading:<ActivityIndicatorIOS color:'#3e00ff',
  style={{marginTop:40,marginLeft:Dimensions.get('window').width/2-10}} />
}
