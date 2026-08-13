import React, { useState } from 'react'

function Todo() {
    const [task, setTask] = useState("")
    const [list, setList] = useState([]);
    const [filter, setFilter] = useState("all")

    const addTask =()=>{
        const item = {
            id:Date.now(),
            name:task,
            isDone:false
        }
        setList(prev =>([...prev,item]))
        setTask("")
    }

    const deleteTask =(id)=>{
        setList(prev => prev.filter(item => item.id !== id));
    }

    const taskDone=(id)=>{
        setList(prev => prev.map(l=> l.id === id ? {...l, isDone: !l.isDone}:l))
    }
    const filteredList = list.filter(item => {
        if (filter === "completed") {
            return item.isDone === true;
        }
        if (filter === "pending") {
            return item.isDone === false;
        }
        return true;
    });
  return (
    <div>
        <div>
            <h1>Filter data</h1>
            <button onClick={() => setFilter("all")}>Show all</button>

<button onClick={() => setFilter("completed")}>
    Completed
</button>

<button onClick={() => setFilter("pending")}>
    Not Completed
</button>

        </div>
        <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} />
        <button onClick={addTask}>Add Task</button>
        <div>
            {filteredList.map(t=>(
                <li key={t.id}>
                    <input type="checkbox" checked={t.isDone} onChange={()=>{taskDone(t.id)}} />
                    {t.name} <button onClick={()=>{deleteTask(t.id)}}>Delete</button></li>
            ))}
        </div>
    </div>
  )
}

export default Todo
