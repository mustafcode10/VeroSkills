import {createContext, useState} from 'react'
// Implement a simple Context API setup to manage user authentication state across your React application.
 export const UserContext = createContext()

function UserProvider({children}) {
    const [name, setname] = useState('Mustaf');


  return (
    <UserContext.Provider value={{name}}>
        {children}
    </UserContext.Provider>
    
  )
}

export default UserProvider


