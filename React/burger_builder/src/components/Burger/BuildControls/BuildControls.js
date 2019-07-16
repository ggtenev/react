import React from 'react';

import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl';


const BuildControls = (props) => {
  const controls = [
    {label:'Salad', type:'salad'},
    {label:'Meat', type:'meat'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'}
  ]
  return (
    <div className={classes.BuildControls}>
      <p>Total Price:<strong>{props.price}</strong></p>
      {controls.map(ctrl => {
        return <BuildControl 
        label = {ctrl.label} 
        key = {ctrl.label} 
        added = {() => props.ingredientAdded(ctrl.type)}
        removed = {() => props.ingredientRemoved(ctrl.type)}
        disabled = {props.disabled[ctrl.type]}/>
      })}
      <button 
      className={classes.OrderButton} 
      disabled = {props.disabledOrder}
      onClick = {props.ordered}><strong>ORDER NOW</strong></button>
    </div>
  ); 
};

export default BuildControls;