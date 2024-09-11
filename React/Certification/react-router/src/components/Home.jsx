import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from './Auth'

function Home() {
    const navigate = useNavigate()
    const handleLogOut =()=> {
      logout()
      navigate('/login')
    }
  return (
    <div>
        <h2>Home</h2>
        <button onClick={()=> navigate(':category')}>Category</button>
        <button onClick={handleLogOut} >LogOut</button>
    </div>
  )
}

export default Home




