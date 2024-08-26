import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProvider from './components/UserContext'
import User from './components/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserProvider>
      <User />
      
    </UserProvider>
    </>
  )
}

export default App



// Implement a simple Context API setup to manage user authentication state across your React application.