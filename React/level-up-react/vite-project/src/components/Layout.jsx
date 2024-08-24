import React from 'react'

function Layout(props) {
  return (
    <>
     <div style={{border: 'solid 2px'}}>

     {props.children}
     <h1>hi</h1>
     </div>
    </>
   
  )
}

export default Layout