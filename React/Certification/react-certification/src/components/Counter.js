import React,{useState} from 'react'

// Create a React component called Counter that uses the useState hook to display and update a count value. Include buttons to increment and decrement the count.
function Counter() {
    const [count, setCount] = useState(0)
    const [error, setError] = useState(false)

    if(error){
      throw new Error ('It crashes app')
    }

  return (
    <>
        <div>Counter</div>
        <p>{count}</p>
        <button  onClick={()=> setCount(count + 1)}>increment</button>
        <button onClick={()=> setCount(count - 1)}>decrement</button>
        <button onClick={()=> setError(true)}>Error</button>
    </>

  )
}

export default Counter


