import { useState } from 'react'
import './App.css'
import ShowList from './problems/ShowList/ShowList'
import TodoList from './problems/TodoList/TodoList'
import AutoSearch from './problems/AutoSearch/AutoSearch'
import InfiniteScroll from './problems/infintieScroll/InfiniteScroll'
import Pagination from './problems/Pagination/Pagination'
import AppFile from './problems/ReUsableModal/AppFile'
import VirtualScroll from './problems/VirtualScroll/VirtualScroll'
import Carausel from './problems/Carausel/Carausel'
import Document from './problems/MachineCoding/Document'
import Counter from './testing/Counter'
import Todo from './Quintype/Todo'
import SearhAPI from './Quintype/SearhAPI'
import Debounced from './Quintype/Debounced'
import MainPage from './Quintype/page-nation/MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <ShowList /> */}
    {/* <TodoList /> */}
    {/* <AutoSearch /> */}
    {/* <InfiniteScroll /> */}
    {/* <Pagination /> */}
    {/* <AppFile /> */}
    {/* <VirtualScroll /> */}
    {/* <Carausel /> */}
    {/* <Document /> */}
    {/* <Counter intialcount={1} /> */}
    {/* <Todo /> */}
    {/* <SearhAPI /> */}
    {/* <Debounced /> */}
    <MainPage />
    </>
  )
}

export default App
