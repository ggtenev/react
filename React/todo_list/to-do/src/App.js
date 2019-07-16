import React, { Component } from 'react';
import './App.css';
import Input from "./Input/Input";
import List from './List/List';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      items:[],
      item : ""
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.deleteItemHandler = this.deleteItemHandler.bind(this);
    this.clearItems = this.clearItems.bind(this);
  }

  changeHandler(event){
    this.setState({item:event.target.value});
  }
  submitHandler(event){
    const newItem = {
      id:1 + Math.random(),
      item:this.state.item.slice()
    }
    const items = [...this.state.items];
    items.push(newItem);
    this.setState({items:items,item:''})
    event.preventDefault();
  }

  deleteItemHandler=(id)=>{
    let items = [...this.state.items];
    items = items.filter(item=>{
      return item.id !== id;
    })
    this.setState({items:items})
  }
  
  clearItems(){
    this.setState({items:[]});
    
  }
  
  render(){
    return (
      <div className="App">
        <Input val = {this.state.item} change = {this.changeHandler} addItem = {this.submitHandler} />
        <h1>Todo List</h1>
        {
          this.state.items.map((item, index) => {
            return <List 
            deleteItem = {()=>this.deleteItemHandler(item.id)} 
            item = {item.item}
            key = {item.id} />
          })
        }

        <button onClick = {this.clearItems}className = 'clear-list'>Clear List</button>
      </div>
    );
  }
  
}

export default App;
