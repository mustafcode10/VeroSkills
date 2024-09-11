import React from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from './Auth'

function Logout() {
    const navigate = useNavigate()
    const handleLogout = () => {
      logout();
      navigate('/login');
    };
 
  return (
    <>
    <div>
    <button onClick={handleLogout}>Log Out</button>
    </div>
    </>

  )
}

export default Logout