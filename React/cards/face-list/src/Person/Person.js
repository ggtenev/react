import React from 'react';
import  './Person.css';

const Person = (props) => {
    const thumb =  `https://randomuser.me/api/portraits/thumb/men/${Math.floor(Math.random() * 65 + 1)}.jpg`;
    return (
        <div className = 'Person'>
            <img src = {thumb} alt = 'Pic'/>
            <h4>{props.name}</h4>
            <h4>{props.job}</h4>
        </div>
    )
}

export default Person;