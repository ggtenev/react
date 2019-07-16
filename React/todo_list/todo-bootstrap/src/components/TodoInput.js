import React, { Component } from 'react';

class TodoInput extends Component {
    render() {
        const {item, handleChange,handleSubmit} = this.props;
        return (
            <div className="card card-body my-3">
                <form action="" onSubmit = {handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className = "fas fa-book"></i>
                            </div>
                        </div>
                        <input type="text" 
                               className = "form-control" 
                               placeholder = "Add item"
                               value = {item}
                               onChange = {handleChange}></input>
                    </div>
                    <button type="submit" className="btn btn-block text-capitaliza btn-primary mt-3">add item</button>

                </form>
            </div>
        );
    }
}

export default TodoInput;