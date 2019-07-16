import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
  return (
    <div>
      <Backdrop clicked = {props.modalClosed} show = {props.show} />
      <div 
      className={classes.Modal}
      style={{transform:props.show ? 'translateY(-100)': 'translateY(-100)', opacity:props.show ? '1' : '0'}}>
        {props.children}
      </div>
    </div>
    
  );
};

export default Modal;