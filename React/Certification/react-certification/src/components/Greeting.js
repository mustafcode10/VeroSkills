import React from 'react'
import ErrorBoundary from './ErrorBoundary'

function Greeting({name, title}) {
    
  return (
    <>
        <div>Greeting {name} </div>
    <p> {title}</p>
    <ErrorBoundary />
    </>

  )
}

export default Greeting