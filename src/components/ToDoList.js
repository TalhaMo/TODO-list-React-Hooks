import React from 'react'
import './ToDoList.css'
const ToDoList=(props)=> {

    return (
        <>
        <div className="todo_style">
           <i className="fas fa-trash-alt" aria-hidden="true" onClick={()=>{props.onSelect(props.id)}}/>
           <button onChange={props.edit}>Edit</button>
             <li className="list_style">{props.text}</li>
        </div>
        </>
    )
}

export default ToDoList
