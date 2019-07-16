import React, { Component } from 'react';
import BoxForm from './BoxForm';
import Box from './Box';

class BoxList extends Component {
  state = {
    boxes: []
  }
  newBox = (box) => {
    let boxes = [...this.state.boxes,box]
    this.setState({
      boxes
    })
  }
  deleteBox = (key) => {
    let boxes = [...this.state.boxes].filter( k => k.key !== key);
    this.setState({
      boxes
    })
  }
  render() {
    const boxes = this.state.boxes.map(b => {
      return <Box 
      width = {b.width + 'px'}
      height = {b.height + 'px'}
      backgroundColor = {b.backgroundColor}
      key = {Math.random()}
      deleteBox = {() => this.deleteBox(this.key)}/>
    })
    return (
      <div>
        <BoxForm newBox = {this.newBox}/>
        {boxes}
      </div>
    );
  }
}

export default BoxList;