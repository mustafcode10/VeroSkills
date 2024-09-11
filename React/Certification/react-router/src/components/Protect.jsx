import React from 'react'
import { isAuthenticated } from './Auth'
import { Navigate } from 'react-router-dom'

function Protect({children}) {
  return (
    <>
        {isAuthenticated() ? children : <Navigate to="/login" />}
    </>



  )
}

export default Protect




// function ProtectedRoute({ element: Component, isAuthenticated, ...rest }) {
//     return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
//   }