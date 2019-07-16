import React from 'react';
import classes from './Styles.module.css'

const Die = ({face}) => {
  return (
    <div className = {classes.Die}>
    <i className={`fas fa-dice-${face}`}></i>
    </div>
  );
};

export default Die;