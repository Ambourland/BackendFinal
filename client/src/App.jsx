import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

import './App.css'
import axios from 'axios'

function App() {
  const [login, setLogin] = useState({
    username: '',
    password: ''
  })
  cosnt [register, setRegister] = useState({
    username: '',
    password: ''
  })

  const nav = useNavigate()

  const handleLogin = (e) => {
    console.log("login", e.target.value)
    setLogin(prev => {
      console.log("prev", prev)
      return {
        ...prev,
        [e.target.id]: e.target.value
      }
    })
  }
  const handleLoginSubmit = () => {
    console.log(login)
    axios({
      method: 'post',
      url: 'http://localhost:3000/login',
      date: login,
      withCredentials: true
    })
    .then(res => {
      console.log("res", res.data)
      if(res.data.msg === "good login"){
        nav("/admin")
      }else {
        alert("BAD LOGIN")
      }
    })
    .catch(error => console.log(error))
  }
  const handleRegister = (e) => {
    console.log("reg", register)
    setRegister(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }

  return (
    <>
    {/**add login */}
    <div id="login">
      <h1>Login</h1>
      <input id="username" onChange={(e) => handleLogin(e)} type="text" placeholder="Username" />
      <input id="password" onChange={(e) => handleLogin(e)} type="text" placeholder="Password" />
      <button onClick={() => handleLoginSubmit()}Login></button>
    </div>
    {/**add register */}
    <div id="register">
      <h1>Register</h1>
      <input id="username" onChange={(e) => handleRegister(e)} type="text" placeholder="Username" />
      <input id="password" onChange={(e) => handleRegister(e)} type="text" placeholder="Password" />
      <button onClick={() => handleRegisterSubmit()}>Register</button>
    </div>
    </>
  )
}
// add route to ToDo page

export default App
