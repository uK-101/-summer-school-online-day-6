import React from 'react'

const TodoItem = ({task, deleteTask, toggleComplete}) => {
    // console.log('hello from todoitem'); 
  return (
    <li className='task-item'> 
        
        <input 
        type="checkbox"
        checked = {task.completed}
        onChange={() => toggleComplete(task.id)} 
        className='task-checkbox'
        />
        <span onClick={() => toggleComplete(task.id)}
            className={`task-text ${task.completed ? 'completed' : ''}`}
            >
            {task.text}
        </span>
        <button className="task-delete" onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  )
}

export default TodoItem