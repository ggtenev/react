import React, { Component } from 'react';
import Ticket from './Ticket';

class App extends Component {
  
  render() {
    return (
      <div>
        <Ticket title = 'Lotto' numbers={[1,2,3,4,5,6]}/>
        <Ticket title = 'Week Day' numbers={[1,2,3,4]}/>
      </div>
    );
  }
}

export default App;