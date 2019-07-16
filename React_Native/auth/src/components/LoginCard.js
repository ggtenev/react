import firebase from 'firebase';
import React ,{Component} from 'react';
import {Text, TextInput,View,TouchableOpacity,ActivityIndicator } from 'react-native';
import Spinner from './Spinner';
import {CirclesLoader,PulseLoader,DotsLoader} from 'react-native-indicator';

class LoginCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      email:null,
      password:null,
      error:null,
      loading:false
    }
    this.onButtonPress = this.onButtonPress.bind(this);
    this.buttonOrLoading = this.buttonOrLoading.bind(this);
  }

  onButtonPress()  {
    this.setState({error:null,loading:true})
    const {email, password} = this.state;

    firebase.auth().signInWithEmailAndPassword(email,password)
      .then(() => this.setState({error:null,loading:false}))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(() => this.setState({error:null,loading:false}))
          .catch(() => {
            this.setState({error:'Authentication Failed',loading:false})
          })
      })
  }
  buttonOrLoading(){
    if(this.state.loading){
      return <CirclesLoader />
    }
    else return <TouchableOpacity 
    onPress = {this.onButtonPress}
    style = {styles.btn}>
    <Text style = {{fontSize:18}}>Login</Text>
    </TouchableOpacity >
  }
  render(){
    return (
      <View style = {styles.card}>
        <TextInput 
        style = {styles.inputField} 
        placeholder='Email' 
        onChangeText = {email => this.setState({email})}
        value = {this.state.email}
        autoCorrect = {false}/>

        <TextInput 
        style = {styles.inputField} 
        placeholder='Password'
        onChangeText = {password => this.setState({password})}
        value = {this.state.password}
        autoCorrect = {false}
        secureTextEntry = {true}/>

        <Text style={{color:'red',fontSize:12,alignSelf:'center',margin:5}}>
          {this.state.error}
        </Text>
  
        {this.buttonOrLoading()}
      </View>
    );
  }
};
const styles = {
  card:{
    justifyContent:'center',
    alignItems:'center',
    margin:5,
    marginTop:50
  },
  inputField:{
    padding:5,
    borderBottomColor:'grey',
    borderBottomWidth:1,
    width:'90%',
    marginBottom:10
  },
  btn:{
    padding:10,
    borderColor:'grey',
    borderWidth:0.3,
    backgroundColor:'#42c8f5',
    borderRadius:5,
    width:'30%',
    alignItems:'center'
  }
}

export default LoginCard;