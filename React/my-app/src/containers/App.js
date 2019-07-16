import React, { Component } from 'react';
import './App.css';


import Person from '../components/Persons/Person/Person';

class App extends Component {
  state = {
    persons : [
      {id: 1, name : 'Lenin',  age : 29},
      {id: 2, name : 'Marx',   age : 29},
      {id: 3, name : 'Engels', age : 29}
    ],
    displayPersons:false, 
  }

  switchNameHandler = (event, id) =>{

      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      })
      const person = {
        ...this.state.persons[personIndex]
      };
      person.name = event.target.value;
      const persons = [...this.state.persons];
      persons[personIndex] = person;
      this.setState({persons : persons})
  }

  removePerson = (indexPerson) => {
    const persons = [...this.state.persons];
    persons.splice(indexPerson,1);
    this.setState({persons:persons})
  }

  togglePersons = () => {
    let doesSHow = this.state.displayPersons;
    this.setState({
      displayPersons : !doesSHow
    })
  }

  render(){

     let style = {
      padding: '5px',
      color:'white',
      fontSize:'2rem',
      
    }

    let persons = null;

    if(this.state.displayPersons){
      
      persons = (
      <div>
      {this.state.persons.map((person, index) => {
      return  <Person 
      click = {() => this.removePerson(index)}
      name = {person.name} 
      age = {person.age}
      key = {person.id}
      changed = {(event) => this.switchNameHandler(event, person.id)}/>
      
      })}
      </div>
      
    );
    style.backgroundColor = 'red';
    }else{
       style.backgroundColor = 'green';
      }
    
  return (
    
    <div className="App">
      <h1>Hello, I'm a React App</h1>
      <button 
      onClick = {this.togglePersons}
      style = {style}>Click Me</button>
      {persons}
    </div>
    
    
    );
  }
}

export default App;
