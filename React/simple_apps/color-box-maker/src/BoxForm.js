import React, { Component } from 'react';

class BoxForm extends Component {
  state = {
    backgroundColor:'',
    width:'',
    height:''
  }
  inputHandler = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  submitHandler = (e) => {
    e.preventDefault();
    this.props.newBox(this.state);
    this.setState({
      backgroundColor:'',
      width:'',
      height:''
    })
  }
  render() {
    return (
      <form onSubmit = {this.submitHandler}>
        <label htmlFor="height"> Height</label>
        <input type="text" name="height" value={this.state.height} onChange = {this.inputHandler}/>
        <label htmlFor="width">Width</label>
        <input type="text" name="width" value={this.state.width} onChange = {this.inputHandler}/>
        <label htmlFor="backgroundColor">Color</label>
        <input type="text" name="backgroundColor" value={this.state.backgroundColor} onChange = {this.inputHandler}/>
        <button>Add Box</button>
      </form>
    );
  }
}

export default BoxForm;