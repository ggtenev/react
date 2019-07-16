import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';


class App extends Component {
  state = {
    todos:[
      {id:1, todo:'Clear Data from Chache'},
      {id:2, todo:'Kill people'}
    ]
  }
  deleteHandler = (id) =>{
    let todos = [...this.state.todos];
    todos = todos.filter(todo => {
      return todo.id !== id;
    })
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  render(){
    return (
      <div className="App container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos = {this.state.todos} deleteTodo = {this.deleteHandler}/>
        <br/>
        <AddTodo addTodo = {this.addTodo}/>
      </div>
    );
  }
  
}

export default App;


