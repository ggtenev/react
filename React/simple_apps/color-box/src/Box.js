import React, { Component } from 'react';
import Color from './Color';

import './App.css';

class Box extends Component {
  state = {
    colors:null,
    boxes:24
  }
  //Generates new color boxes on hte screen when clicked
  generateColors = () => {
    let boxes = [];
    for(let i = 0;i < this.state.boxes; i++){
      boxes.push([Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 256)])
    }
    this.setState({
      colors:boxes
    })
  }
  //New color for the specific box when user clicks it
  newColor = (color) => {
    let idx = this.state.colors.indexOf(color);
    let randomColor = [
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256)
    ];
    let newColors = [...this.state.colors];
    newColors.splice(idx,1,randomColor);
    this.setState({
      colors:newColors
    })
  }
  render() {
    let boxes=null;
    if(this.state.colors){
        boxes = this.state.colors.map( c => {
        return <Color 
        color={c} 
        clicked = {() => this.newColor(c)}
        key = {Math.random()}/>
       })
    } else boxes = 'Generate Some Boxes'
    return (
      <div className = "Boxes">
        <h1>Color Box</h1>
        {boxes} <br/>
        <button onClick = {this.generateColors}>Generate Colors</button>
      </div>
    );
  }
}

export default Box;