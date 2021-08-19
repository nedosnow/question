import {createContext, useContext, useState} from 'react';

const userContext = createContext();

export const UserContextProvider = ({children}) => {
  const [userName, setUserName] = useState('')

  

  // useEffect(() => {



  // }, [user]);

  return <userContext.Provider value={{userName, setUserName}}>{children}</userContext.Provider>
}

export const useUserContext = () => useContext(userContext)
