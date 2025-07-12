import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({tasks, deleteTask, toggleComplete}) => {
  return (
   <ul className="task-list">
    {tasks.map(task =>(
        <TodoItem
        key={task.id}
        task = {task}
        deleteTask = {deleteTask}
        toggleComplete = {toggleComplete}
        />
    ) )}
    
   </ul>
  )
}

export default TodoList