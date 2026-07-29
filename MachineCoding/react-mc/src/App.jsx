import { useState } from 'react'
import './App.css'
import ShowList from './problems/ShowList'
import TodoList from './problems/TodoList'
import AutoSearch from './problems/AutoSearch'
import InfiniteScroll from './problems/infintieScroll/InfiniteScroll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <ShowList /> */}
    {/* <TodoList /> */}
    {/* <AutoSearch /> */}
    <InfiniteScroll />
    </>
  )
}

export default App
