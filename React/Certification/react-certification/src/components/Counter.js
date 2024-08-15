import React,{useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0)

  return (
    <>
        <div>Counter</div>
        <p>{count}</p>
        <button  onClick={()=> setCount(count + 1)}>increment</button>
        <button onClick={()=> setCount(count - 1)}>decrement</button>
    </>

  )
}

export default Counter


// Create a React component called Timer that displays the current time and updates every second using the useEffect hook.