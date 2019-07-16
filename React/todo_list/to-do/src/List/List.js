import React from 'react';
import './List.scss';

const List = (props) => {
    return (
        <div className="todo">
            {props.item}
            <span onClick = {props.deleteItem} className = "fass"><i class="fas fa-trash-alt"></i></span>
        </div>
    );
};

export default List;