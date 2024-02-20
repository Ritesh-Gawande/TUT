import React from 'react'
import TodoItem from "../components/TodoItem";

const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
  }
  return (
    <div className="container" style={myStyle}>
     <h3>Todos List</h3>
     {props.todos.length===0? "No todos":
      props.todos.map((todo)=>{
          return (
          <><TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/><hr/></>)
      })
    }
    </div>
  )
}

export default Todos
