import React, { Component } from 'react';
import {View, Text, TouchableOpacity,Image} from 'react-native';

class TodoApp extends Component {
  constructor(props){
    super(props)
    this.state = {
      appear:true
    }
    
  }
  render() {
    
    return (
      <View style = {styles.container}>
        <View style={{flex:1,backgroundColor:'red'}}></View>    
        <View style={{flex:2,backgroundColor:'green'}}></View>    
        <View style={{flex:3,backgroundColor:'yellow'}}></View>    
        <Text>fewgrae</Text>
      </View>
    );
  }
}

const styles = {
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    position:'relative',
    top:50,
    backgroundColor:'red'
  }
}

export default TodoApp;