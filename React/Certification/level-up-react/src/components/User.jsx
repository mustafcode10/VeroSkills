import React, { useContext } from 'react'
import { UserContext } from './UserContext'

function User() {
    const {name} = useContext(UserContext)

  return (
    <div>User hi {name}</div>
  )
}

export default User