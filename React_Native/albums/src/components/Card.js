import React from 'react';
import {View} from 'react-native';

const Card = ({children}) => {
  return(
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = {
  container:{
    borderWidth:1,
    borderRadius:2,
    borderColor:'#ddd',
    shadowColor:'#000',
    shadowOffset:{width:2,height:2},
    shadowOpacity:0.1,
    shadowRadius:2,
    marginLeft:5,
    marginTop:10,
    marginRight:5,
    elevation:1
  }
}
export default Card;