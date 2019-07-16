import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        return (
            <div>
                <li className="list-group-item text-capitalize d-flex my-2 justify-content-between"></li>
                <h6>title</h6>
                <div className="todo-icon">
                    <span className="mx-2 text-succes">
                       <i className="fas fa-pen" />
                    </span>
                    <span className="mx-2 text-danger">
                       <i className="fas fa-trash" />
                    </span>
                </div>
            </div>
        );
    }
}

export default TodoItem;