import React, { useState } from 'react'

function TodoList() {
    const [tasks, setTask] = useState("");
    const [data, setData] = useState([]);
    const addTask =()=>{
        setData(prev =>([...prev,{
            id:data.length+1,
            task:tasks
        } ]))
        setTask("")

    }
    const deleteTask=(id)=>{
        const filteredData = data.filter(data =>data.id !== id)
        setData(filteredData)
    }
  return (
    <div>
        <input type="text" value={tasks} onChange={(e)=>setTask(e.target.value)} />
        <button onClick={addTask}>Add Task</button>
        <div>
            {data.map(d=>(
                <h1 key={d.id}>{d.task} <button onClick={()=>{deleteTask(d.id)}}>Delete</button></h1>
            ))}

            


        </div>
    </div>
  )
}

export default TodoList
