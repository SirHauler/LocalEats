import React, { createContext, useState, useEffect, FC, Dispatch, SetStateAction } from 'react';
import { Auth } from 'aws-amplify'
import { useRouter } from 'expo-router';
export interface AuthProps {
  children?: any
}


// this type is for objects!
type AuthContextState = {
  isLoggedIn: boolean
}

type AuthContextValue = {
  user: object | null
  // setUser: Dispatch<SetStateAction<AuthContextState>>;
  login: (email: string, password: string) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextValue>({
  user: {}, 
  login: () => {}, 
  logout: () => {}, 
});

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
  // const [auth, setAuth] = useState({isLoggedIn: false});
  const [user, setUser] = useState(null); 
  const router = useRouter()
  const refresh = false

  async function currentUser() {
    try {
      const user = await Auth.currentAuthenticatedUser()
      setUser(user)
    } catch (e) {
      console.log(e)
      setUser(null)
    }
  }

  async function login(email: string, password: string) {
    try {
        const user = await Auth.signIn(email, password);
        console.log("Here is the user", user); 
        router.replace("/home/Map")
        setUser(user)
    } catch (error) {
        console.log('error signing in', error); 
    }
  }

  async function logout() {
    // perform logout logic and clear user state
    try {
      await Auth.signOut()
      setUser(null)
      router.push("/authentication/SignIn")
      console.log("User Logged Out: " + user)
    } catch (error) {
      console.log(error)
    }
  };

  // find the current user
  useEffect(() => {
    currentUser()
    console.log('Fetched Current User')
  }, [refresh])

  function useProtectedRoute(user: any) {
    useEffect(() => {
      if (user == null) {
        router.push("/authentication")
      } else {
        router.replace("/home")
      }
    }, [user])

  }

  useProtectedRoute(user)

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;