import { useEffect, useState } from 'react'

import "./App.css"


function App() {
  const [seconds, setSeconds] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times!`
    
  }, [count]);

  useEffect(() => {
    const interval = setInterval(()=>{
     setSeconds(prevSeconds => prevSeconds + 1)
    }, 1000)
    return ()=> clearInterval(interval)
  },[]);


  return (
    <>
      <button onClick={()=> setCount(count => count + 1)}>Updated count {count}</button>
     <p>Time elapsed {seconds} seconds </p>
    </>
  )
}

export default App
