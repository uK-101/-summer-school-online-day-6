import React, { useState } from 'react'

const TodoInput = ({addTask}) => {
    const [text, setText] = useState(" ");
    function handleSubmit (e) {
        e.preventDefault();
        if(text.trim() !== "") {
            addTask(text);
            setText("");
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Enter a task"
        value = {text}
        onChange={(e) => setText(e.target.value)}
        className="todo-input"
        />
        <button  className ="todo-button" type="submit">Add</button>
    </form>
  )
}

export default TodoInput