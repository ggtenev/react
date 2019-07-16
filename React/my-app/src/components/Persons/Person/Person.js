import React from 'react';
import './Person.css';


const Person = (props) => {
    
    return (
        <div className = "Person" >
            <p onClick = {props.click}>I'm {props.name} and I am {props.age} </p>
            <h2>{props.children}</h2>
            <input type="text" onChange = {props.changed}/>
        </div>
        
    )
}

export default Person;