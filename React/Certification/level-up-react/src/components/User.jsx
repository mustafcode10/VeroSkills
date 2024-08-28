import React, { useContext } from 'react'
import { UserContext } from './UserContext'

function User() {
    const {name} = useContext(UserContext)

  return (
    <>
        <div>
          <h2>User Name {name}</h2>
        </div>
    </>

  )
}

export default User