import React, { Component } from 'react';
import Die from './Die';
import classes from './Styles.module.css'

class RollDice extends Component {
  
  state = {
    die1:'six',
    die2:'six',
    rolling:false
  }
  rolling = () =>{
    this.setState({
      rolling:true
    })
    setTimeout(() => {
      let c = ['one','two','three','four','five','six'];
      let newDie1 = c[Math.floor(Math.random() * 6)];
      let newDie2 = c[Math.floor(Math.random() * 6)];
      this.setState({
        die1:newDie1,
        die2:newDie2,
        rolling:false
    })
  },1000)
}
  render() {
    return (
      <div >
        <div className = {this.state.rolling ? classes.shaking : null}>
          <Die face={this.state.die1}/>
          <Die face={this.state.die2}/>
        </div>
        <div>
          {
            this.state.rolling ? (
              <button disabled = {this.state.rolling} onClick = {this.rolling} className={classes.Button}><strong>Rolling...</strong></button>
            ):<button onClick = {this.rolling} className={classes.Button}><strong>Roll Dice</strong></button>
          }
          
        </div>
      </div>
    );
  }
}

export default RollDice;