import { createContext, useState } from 'react';

export const UserContext = createContext()

export function UserProvider({children}){
  const user_id = localStorage.getItem("user")
  const [user, setUser] = useState(user_id)
  return(
    <UserContext.Provider value = {{user, setUser}} >
      { children }
    </UserContext.Provider>
  )
}