import React, {useContext, createContext, useState} from 'react'

const LoginContext = createContext();

const LoginProvider= ({children}) => {

    const [loggedInUserUsername, setLoggedInUserUsername] = useState([]);
    
  return (
    <LoginContext.Provider value={{loggedInUserUsername,setLoggedInUserUsername}}>{children} </LoginContext.Provider>
  )
}
export const useLoginContext = () => useContext(LoginContext);
export default LoginProvider;