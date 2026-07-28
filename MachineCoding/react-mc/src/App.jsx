import { useState } from 'react'
import './App.css'
import ShowList from './problems/ShowList'
import TodoList from './problems/TodoList'
import AutoSearch from './problems/AutoSearch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <ShowList /> */}
    {/* <TodoList /> */}
    <AutoSearch />
    </>
  )
}

export default App
