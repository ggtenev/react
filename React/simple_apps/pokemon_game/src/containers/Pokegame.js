import React, { Component } from 'react';
import Pokedex from '../components/Pokedex';

class Pokegame extends Component {
  state = {
    data: 
    [
      {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
      {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
      {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
      {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
      {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
      {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
      {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
      {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
    ]
  }
  
  
  render() {
  let playerOne=false;
  let playerTwo=false;

  const rand = () => Math.floor(Math.random() * this.state.data.length);
  let team1 =  [];
  let team2 =  [];

  for (let i = 0; i < this.state.data.length/2; i++){
    team1.push(this.state.data[rand()])
  }
  for (let i = 0; i < this.state.data.length/2; i++){
    team2.push(this.state.data[rand()])
  }
  let score1 = 0;
  let score2 = 0;

  team1.forEach(t => score1+=t.base_experience);
  team2.forEach(t => score2+=t.base_experience);

  if(score1 > score2){
    
      playerOne=true;
    
  }else{
    
      playerTwo=true;
    
  }

    return (
      <div>
        <Pokedex wins = {playerOne} data = {team1}/>
        <Pokedex wins = {playerTwo} data = {team2}/>
      </div>
    );
  }
}

export default Pokegame;