import { useState } from 'react'
import './App.css'
import ShowList from './problems/ShowList/ShowList'
import TodoList from './problems/TodoList/TodoList'
import AutoSearch from './problems/AutoSearch/AutoSearch'
import InfiniteScroll from './problems/infintieScroll/InfiniteScroll'
import Pagination from './problems/Pagination/Pagination'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <ShowList /> */}
    {/* <TodoList /> */}
    {/* <AutoSearch /> */}
    {/* <InfiniteScroll /> */}
    <Pagination />
    </>
  )
}

export default App
