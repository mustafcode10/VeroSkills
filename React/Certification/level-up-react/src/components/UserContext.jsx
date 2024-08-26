import {createContext, useState} from 'react'

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