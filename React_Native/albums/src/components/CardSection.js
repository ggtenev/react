import React from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';

const CardSection = ({children}) => {
  return(
    <View style = {styles.container}>
      {children}
    </View>
  )
}
const styles = {
  container:{
    borderBottomWidth:1,
    padding:5,
    backgroundColor:'#fff',
    justifyContent:'flex-start',
    flexDirection:'row',
    borderColor:'#ddd',
    position:'relative',
    marginRight:5
  }
}

export default CardSection;