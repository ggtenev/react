import React, { Component } from 'react';
import Person from '../Person/Person';
import './List.css';


class List extends Component {
    constructor(props){
        super(props)
        this.state = {
           people: [
                {id:1, decription:'Accountant', name:'John Doe'},
                {id:2, decription:'Dishwasher', name:'Peter Griffin'},
                {id:3, decription:'Analyst', name:'Clark Kent'}
            ]
        }
    }
    render (){
        let people = this.state.people;
        return(
            <div>
                {people.map(p => {
                   return <Person 
                        key = {p.id}
                        name = {p.name}
                        job = {p.decription}
                    />
                })}
            </div>
        )
    }

}

export default List;