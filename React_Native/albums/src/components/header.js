import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style = {styles.viewStyle}>
      <Text style = {styles.textStyle}>
          {title}
      </Text>
    </View>
    
  );
};

const styles = {
  textStyle: {
    fontSize:25
    
  },
  viewStyle: {
    backgroundColor:'#f8f8f8',
    alignItems:'center',
    justifyContent:'center',
    heigth:60,
    paddingTop:15,
    paddingBottom:15,
    // borderBottomColor: '#47315a',
    shadowColor: 'black',
    // borderBottomWidth: 1 ,
    shadowOffset:{  width: 0,  height: 7 },
    shadowOpacity: 0.4,
    elevation:3
  }
};

export default Header;