import React, { Component } from 'react';
import './JokeList.css';
import Joke from './Joke';
import axios from 'axios';

class JokeList extends Component {
  static defaultProps = {
    numJokes: 10
  }
  state = {
    jokes:[]
  }
  async componentDidMount(){
    let jokes = [];
    while(jokes.length < this.props.numJokes){
      let res = await axios.get("https://icanhazdadjoke.com/",
      {headers : {Accept:"application/json"}
    });
    jokes.push({joke:res.data.joke,votes:0})
    }
    this.setState({jokes});
  }
  render() {
    let jokes = this.state.jokes.map(j => {
      return <Joke votes={j.votes} text={j.joke}/>
    })
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title"><span>Dad</span> Jokes</h1>
          <img src="https://images-na.ssl-images-amazon.com/images/I/41GH2D%2BfYzL._SX425_.jpg" alt="emoji" className=""/>
          <button className="JokeList-getmore">New Jokes</button>
        </div>
        <div className="JokeList-joke">
          {jokes}
        </div>
        
      </div>
    );
  }
}

export default JokeList;