import React, { Component } from 'react';
import Ball from './Ball';

import './App.css';

class Ticket extends Component {
  state = {
    numbers:[]
  }
  ballHandler = () => {
    let numbers = [];
    this.props.numbers.forEach(n => numbers.push(Math.floor(Math.random() * 41)))
    this.setState({
      numbers
    })
  }
  
  render() {
    let {title} = this.props;
    let balls = this.state.numbers.map(n => {
      return <Ball num = {n}/> 
    })
    return (
      <div className="Ticket">
        <div style={{textAlign:'center',fontWeight:'bold',margin:'1rem'}}>{title}</div>
        <div style={{textAlign:'center'}}>{balls}</div>
        <button className="Button" onClick = {this.ballHandler}>Generate</button>
      </div>
    );
  }
}

export default Ticket;