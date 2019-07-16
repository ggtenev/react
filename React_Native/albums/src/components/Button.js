import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress}) => {
  return(
    <TouchableOpacity style = {styles.buttonStyle} onPress = {onPress}>
      <Text style = {styles.textStyle}>Buy Now</Text>
    </TouchableOpacity>
    
  )
}

const styles = {
  buttonStyle:{
    flex:1,
    alignSelf:'stretch',
    backgroundColor:'orange',
    borderRadius:5,
    borderWidth:1,
    borderColor:'grey',
    marginLeft:5,
    marginRight:5,
    padding:5
  },
  textStyle:{
    alignSelf:'center',
    fontSize:16,
    color:'white',
    fontWeight:'bold'

  }
}

export default Button;