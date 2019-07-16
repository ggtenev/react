import React, { Component } from 'react';
import './App.css';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      {name:'Ryi', age:19, belt:'green',id:1},
      {name:'Steve', age:23, belt:'yellow',id:2},
      {name:'Carl', age:24, belt:'black',id:3}
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random() +1;
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas
    })
  }
  deleteNinja = (id) => {
    let ninjas = [...this.state.ninjas];
    ninjas = ninjas.filter(ninja => ninja.id !== id)
    this.setState({
      ninjas
    })
  }
  render(){
    return (
      <div className="App">
        <h1>Ninjas</h1>
        <Ninjas deleteNinja = {this.deleteNinja} ninjas = {this.state.ninjas}/>
        <AddNinja addNinja = {this.addNinja}/>
      </div>
    );
  } 
}


export default App;
