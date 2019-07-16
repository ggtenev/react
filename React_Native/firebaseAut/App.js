/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import * as firebase from 'firebase';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Container,Content,Header,Form,Input,Item,Button,Label} from 'native-base'



var firebaseConfig = {
  apiKey: "AIzaSyBo915dSF6uiKM0fcijhRGUBuYMmlfOaBY",
  authDomain: "fire-auth-a156d.firebaseapp.com",
  databaseURL: "https://fire-auth-a156d.firebaseio.com",
  projectId: "fire-auth-a156d",
  storageBucket: "",
  messagingSenderId: "742258075137",
  appId: "1:742258075137:web:fa5f486481fb541d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class App extends Component {
  state = {
    email:'',
    password:'',
    error:'',
    user:null
  }
  signUp = (email,password) => {
    try{
      if(this.state.password.length < 6){
        alert('Pass not enoigh');
        return;
      }
      else firebase.auth().createUserWithEmailAndPassword(email,password);
    }catch(error){
      this.setState({error:'Error'})
    }
  }
  logIn = (email,password) => {
    try{
      firebase.auth().signInWithEmailAndPassword(email,password).then(user => this.setState({user}))
    }
    catch(error){
      this.setState({error:'not success'})
    }
  }
  
  render(){
  return (
    <Container style={styles.container}>
      <Form>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input 
          onChangeText = {email => this.setState({email})}
          autoCorrect={false}
          autoCapitalize='none'
          value = {this.state.email}
          />
        </Item>
        <Item floatingLabel>
          <Label>Password</Label>
          <Input 
          onChangeText = {password => this.setState({password})}
          autoCorrect={false}
          autoCapitalize='none'
          secureTextEntry
          value = {this.state.password}
          />
        </Item>
        <Button style={{width:'90%',alignItems:'center',marginTop:10}}
        full
        rounded
        success
        onPress = {() => this.logIn(this.state.email,this.state.password)}>
        <Text style={{color:'white'}}>Login</Text>
        </Button>
        <View style={{alignItems:'center',marginTop:5}}>
          <Text >or</Text>
        </View>
        <Button style={{width:'90%',alignItems:'center',marginTop:10}}
        full
        rounded
        primary
        onPress = {() => this.signUp(this.state.email,this.state.password)}>
        <Text style={{color:'white'}}>Sign Up</Text>
        </Button>
      </Form>
      <View>{this.state.user}</View>
    </Container>
  );
 }
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default App;
