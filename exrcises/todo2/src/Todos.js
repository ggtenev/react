import React from 'react';

function Todos({todos,deleteTodo}) {

  const todosList = todos.length ? (

     todos.map(todo =>{
      return (
        <div className="collection-item center" key = {todo.id} onClick = {() => deleteTodo(todo.id)}>
          <span>{todo.todo}</span>
        </div>
      )
    })
  ) : (
    <p className="center">No Todo's</p>
  )
  return (
    <div className="todos collection">
        <ul>
          {todosList}
        </ul>
    </div>
  );
}


export default Todos;