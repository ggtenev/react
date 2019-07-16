import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    todo:""
  }
  changeHandler = (e) => {
    this.setState({
      todo:e.target.value
    })
  }
  submitTodo = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      todo:""
    })
  }
  render() {
    return (
      <div>
        <form className="input-field" onSubmit = {this.submitTodo}>
          <input type="text" onChange = {this.changeHandler} value = {this.state.todo} placeholder="Add Todo"></input>
          <button className="btn waves-effect waves-light" type="submit" name="action">Submit
          <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    );
  }
}

export default AddTodo;