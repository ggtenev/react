import React from 'react';
import {View, Text} from 'react-native';

const Header = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>Tech Stack</Text>
    </View>
  );
};

const styles = {
  container:{
    padding:10,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#e3f9ff',
    borderBottomWidth:1,
    borderBottomColor:'black'

  },
  text:{
    fontWeight:'700',
    fontSize:18
  }
}

export default Header;