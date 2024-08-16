import React from 'react'

// Write a simple React functional component called Greeting that takes a name prop and renders "Hello, [name]!".
function Greeting({name, title}) {
    
  return (
    <>
        <div>Greeting {name} </div>
    <p> {title}</p>
    </>

  )
}

export default Greeting