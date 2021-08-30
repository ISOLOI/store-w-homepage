import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export default function AuthContextProvider({children}) {
const [ isUserLoggedIn, setUserLogin ] = useState(false);
const [userName, setUserName] = useState("");
const [password, setPassword] = useState("");


  return (
    <AuthContext.Provider value={{isUserLoggedIn, setUserLogin, userName, setUserName, password, setPassword}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  return useContext(AuthContext);
}