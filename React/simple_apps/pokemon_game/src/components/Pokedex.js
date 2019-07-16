import React from 'react';
import Pokecard from './Pokecard';

const Pokedex = ({data,wins}) => {
  // const cards = data.map(p =>{
  //   return <Pokecard 
  //   name = {p.name} 
  //   key = {p.id} 
  //   type = {p.type} 
  //   exp = {p.base_experience}
  //   id = {p.id}
  //   />
  // })
  
  const dex = data.map(p =>{
      return <Pokecard 
      name = {p.name} 
      key = {Math.random()} 
      type = {p.type}
      exp = {p.base_experience}
      id = {p.id}
      />
      })

    const win = wins ? (
      <h2 style={{color:'green',textAlign:'center'}}>This deck wins!</h2>
    ) : (
      <h2 style={{color:'red',textAlign:'center'}}>This deck looses!</h2>
    )
 
  return (
    <div style={{padding:'2rem',width:'95%',margin:'auto'}}>
      {win}
      {dex}
    </div>
  );
};

export default Pokedex;