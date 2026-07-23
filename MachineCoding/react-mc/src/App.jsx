import { useState } from 'react'
import './App.css'
import ShowList from './problems/ShowList'
import TodoList from './problems/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <ShowList /> */}
    <TodoList />
    </>
  )
}

export default App
