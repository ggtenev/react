/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import firebase from 'firebase';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

import LoginCard from './src/components/LoginCard'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoggedIn:null
    }
    this.renderContent = this.renderContent.bind(this);
  }
  
  componentWillMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyB2cGdCkmiFT39Ab6q7lL9ald3r7CNIDT0",
      authDomain: "authentication-5e14f.firebaseapp.com",
      databaseURL: "https://authentication-5e14f.firebaseio.com",
      projectId: "authentication-5e14f",
      storageBucket: "",
      messagingSenderId: "234221762039",
      appId: "1:234221762039:web:d5210683239001ab"
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.setState({isLoggedIn:true})
      } else{
        this.setState({isLoggedIn:false})
      }
    })
  }
   renderContent(){
    if(!this.state.isLoggedIn){
      return <LoginCard />
    }else{
      return <Button title='Log Out' onPress = {() => firebase.auth().signOut()}></Button>
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.header}>
          <Text style ={{fontSize:24}}>Auth</Text>
        </View>
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems:'stretch'
  },
  header:{
    padding:5,
    backgroundColor:'#fff',
    alignItems:'center',
    height:80,
    justifyContent:'center',
    borderWidth:1,
    borderColor:'grey',
    shadowColor: "#000",
    shadowOffset: {
  	width: 0,
	  height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5

  }
 
});
