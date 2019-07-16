import React from 'react';
import TodoList from './components/TodoList';
import  TodoInput from './components/TodoInput';

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class App extends React.Component {
  state = {
    item:'',
    items:[],
    id:0,
    editItem:false
  }
  handleChange = (event) =>{
    this.setState({item:event.target.value})
  } 
  handleSubmit = (event) =>{
    event.preventDefault();
  }
  render(){
    return (
      <div className = "container">
        <div className = "row">
            <div className = "col-10 mx-auto col-md-8 mt-4">
              <h3 className = "text-capitalize text-center"> Todo Input</h3>
              <TodoInput 
              handleChange = {this.handleChange}
              item = {this.state.item}
              handleSubmit = {this.handleSubmit}
              />
              <TodoList />
            </div>
        </div>
                  
      </div>
    );
  }
 
}

export default App;
