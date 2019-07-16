import React, { Component } from 'react';
import Coin from './Coin';

class Flip extends Component {
  state = {
    flips:0,
    heads:0,
    tails:0,
    url:null
  }
  flipHandler = () =>{
    let heads = this.state.heads;
    let tails = this.state.tails;
    let flips = this.state.flips;
    let result = Math.floor(Math.random() * 2);
    if(result === 0){
      heads +=1;
      flips +=1;
      this.setState({heads,url:'https://tinyurl.com/react-coin-heads-jpg',flips})
    } else {
      tails +=1;
      flips +=1;
      this.setState({tails,url:'https://tinyurl.com/react-coin-tails-jpg',flips})
    }
  }
  render() {
    return (
      <div>
        <h1>Let's flip a coin!</h1>
        <Coin url = {this.state.url} />
        <button onClick = {this.flipHandler}>Flip Coin</button>
        <p>Out of <strong>{this.state.flips} flips</strong>, there have been <strong>{this.state.heads} heads</strong> and <strong>{this.state.tails} tails</strong></p>
      </div>
    );
  }
}

export default Flip;