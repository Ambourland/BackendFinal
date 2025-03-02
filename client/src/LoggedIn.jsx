import React ,{useState} from 'react'
import TodoList from './TodoList'

const LoggedIn = () => {


const [todo, setTodo] = useState({})


  return (
    <TodoList />

  )
}

export default LoggedIn