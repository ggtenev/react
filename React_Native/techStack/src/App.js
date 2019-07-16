/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View,Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers/index';


import Header from './components/Header'
import TodoApp from './sideRedux/TodoApp'

class App extends Component {
  render(){
    return(
      <Provider store = {createStore(reducers)}>
          <View>
            
          </View>
      </Provider>
        
      
    )
  }
}


export default App;

