import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
  return (
    <div>
        <h2>Home</h2>
        <button onClick={()=> navigate(':category')}>Category</button>
    </div>
  )
}

export default Home




