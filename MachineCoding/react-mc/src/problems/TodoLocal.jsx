import React, { useEffect, useState } from 'react'

function TodoLocal() {
    const [task, setTask] = useState("")
    const [list, setList] = useState(()=>{
        const savedTodos = localStorage.getItem("todos")
        return savedTodos ? JSON.parse(savedTodos) :[]
    })

      useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(list));
  }, [list]);

    const addTask =()=>{
        if(task.trim()===""){return}
        const newTask = {
            id:Date.now(),
            task:task
        }
        setList(prev =>[...prev, newTask])
        setTask("")
    }

    const deleteTask=(id)=>{
        const filteredList = list.filter(l=> l.id !== id)
        setList(filteredList)
    }

  return (
    <div>TodoLocal
        <br />
        <input type="text" value={task} onChange={(e)=>{setTask(e.target.value)}} />
        <button onClick={addTask}>Add Task</button>
        <div>
            {list.map(l=>(
                <div key={l.id}>
                    <h1>{l.task}  <button onClick={()=>{deleteTask(l.id)}}>Delete Task</button> </h1>
                </div>
            ))}
        </div>

    </div>
  )
}

export default TodoLocal