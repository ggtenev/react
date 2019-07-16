import React from 'react';
import './Input.scss'

function Input({addItem, change, val}) {
    return (
        <div>
            <h1>Todo Input</h1>
            <form className = "input" onSubmit = {addItem}>
                <span><i class="fas fa-save"></i></span>
                <input value = {val} onChange = {change} type="text" placeholder = "Enter activity..." className = "input-field"/><br/>
                <button type= "submit" className = "add-item-btn">Add Item</button>
            </form>
            
        </div>
    );
}

export default Input;