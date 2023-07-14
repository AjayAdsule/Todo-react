/* eslint-disable react/prop-types */
import React from 'react'
import {FaTrashCan,FaPenToSquare} from "react-icons/fa6";
const Todo = ({todo,deleteTodo,taskCompleted,editTodo}) => {
  return (
    <React.Fragment>
      <div className="Todo">
        <p onClick={()=>taskCompleted(todo.id)} className={`${todo.isCompleted ? 'completed':'' }`}>{todo.task}</p>
        <div >
            <FaTrashCan className='fa-trash ' onClick={()=>deleteTodo(todo.id)}/>
            <FaPenToSquare className='fa-trash ' onClick={()=>editTodo(todo.id)}/>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Todo
