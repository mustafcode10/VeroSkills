import React from 'react'
import { login } from './Auth'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()

    const handleLogin  =()=> {
        login()
        navigate("/")


    }
  return (
    <>
     <div>Login</div>
    <button onClick={handleLogin}>Login</button>
    </>
   
  )
}

export default Login