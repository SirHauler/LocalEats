import React, { createContext, useState, FC, Dispatch, SetStateAction } from 'react';

export interface AuthProps {
  children?: any
}

type AuthContextState = {
  isLoggedIn: boolean
}

type AuthContextValue = {
  auth: AuthContextState, 
  setAuth: Dispatch<SetStateAction<AuthContextState>>;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// interface AuthContextType {
//   isLoggedIn: boolean
//   setIsLoggedIn: Function
//   // logout: () => void;
// }

// export const AuthContext = createContext<AuthContextType>({
//   isLoggedIn: false,
//   setIsLoggedIn: () => {}
//   // logout: () => {},
// });

// export const AuthContext = createContext({});

const AuthProvider= (props: AuthProps) => {
  // const [user, setUser] = useState<{ username: string } | null>(null);
  const [auth, setAuth] = useState({isLoggedIn: false});
  // console.log(auth)
  // const login = (isLoggedIn: boolean) => {
  //   // perform login logic and set user state
  //   setIsLoggedIn(!isLoggedIn);
  // };

  // const logout = () => {
  //   // perform logout logic and clear user state
  //   setUser(null);
  // };


  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;