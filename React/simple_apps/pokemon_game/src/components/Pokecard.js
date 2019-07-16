import React from 'react';
import classes from'./Pokecard.module.css';

const Pokecard = ({name,type, exp, id}) => {
  const convert = (n) => {
    if(n < 10) return ('00' + n);
    else if(n < 100) return ('0' + n);
    else return n;
  }
  return (
    <div className={classes.Pokecard}>
      <div className={classes.PokecardName}>{name}</div>     
      <img className={classes.PokecardImg} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${convert(id)}.png`} alt="Pokemon"/>
      <h3>Type: {type}</h3>
      <h4>EXP: {exp}</h4>
    </div>  
  );
};

export default Pokecard;