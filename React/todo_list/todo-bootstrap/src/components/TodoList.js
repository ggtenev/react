import React, { Component } from 'react';
import TodoInput from './TodoInput';


class TodoList extends Component {
    render() {
        return (
            <div>
                <ul className="list-group my-5">
                    <h3 className="text-capitalize text-center">todo list</h3>
                    <button  type = "button" className="btn btn-danger btn-block text-capitalize">Clear list</button>
                </ul>
            </div>
        );
    }
}

export default TodoList;