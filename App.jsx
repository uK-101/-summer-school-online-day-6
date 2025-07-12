import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [tasks, setTasks] = useState([])  
  const [filter, setFilter] = useState('')

  const addTask  = (text) => {
      if(text.trim() === "") return;
      setTasks([
        ...tasks, 
        {
          id:Date.now(),
          text, 
          completed:false
        }
      ])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleCompleteOrNot = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? {...task, completed: !task.completed} : task
    ))
  }

  const handleFilter = (e) => {
    setFilter(e.target.value)
  }

  const filteredTasks = tasks.filter(task => 
    task.text.toLowerCase().includes(filter.toLowerCase())
  )
  const incompleteTasks = filteredTasks.filter(task => !task.completed);
  const completedTasks = filteredTasks.filter(task => task.completed);

  return (
    <div className='outer-container'>
      <h1 className='heading'>Basic TODO APP</h1>
      <TodoInput addTask={addTask}/>

      <input type="text" 
      placeholder="Filter Tasks"
      value = {filter}
      onChange={handleFilter}
      className="filter-input"
      />
      <h2>Incomplete Tasks</h2>
    <TodoList
      tasks={incompleteTasks}
      deleteTask={deleteTask}
      toggleComplete={toggleCompleteOrNot}
    />

    <h2>Completed Tasks</h2>
    <TodoList
      tasks={completedTasks}
      deleteTask={deleteTask}
      toggleComplete={toggleCompleteOrNot}
      />
    </div>
  )
}

export default App
