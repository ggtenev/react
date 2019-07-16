import React, { Component } from 'react';
import RollDice from './RollDice';

class App extends Component {
  render() {
    return (
      <div style={{textAlign:'center'}}>
        <RollDice />
      </div>
    );
  }
}

export default App;