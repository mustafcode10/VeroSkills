import React, { useContext } from 'react'
import { UserContext } from './UserContext'

function User({children}) {
    const {name} = useContext(UserContext)

  return (
    <div>
      {children}
      <h2>User {name}</h2>
    </div>
  
  )
}

export default User