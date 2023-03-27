import "expo-router/entry";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState, createContext, useContext } from "react";
import { Link, Redirect } from "expo-router";
import { Amplify } from 'aws-amplify'; 
import awsmobile from "../src/aws-exports";
import { AuthContext } from "../util/AuthProvider";
Amplify.configure(awsmobile);

export type LoginContextType = {
  isLoggedIn: boolean, 
  login: () => void
}
export const LoginContext = createContext<LoginContextType>({
  isLoggedIn: false, 
  login: () => {}
});

// export const useGlobalContext = () => useContext(LoginContext)

export default function Index() {
  
  const authValue = useContext(AuthContext)
  // console.log(authValue?.auth.isLoggedIn)
  return (
    <>
      {
        authValue?.auth.isLoggedIn ? (
          <Redirect href="app/home/Map"/>
        ) : (
          <View style={styles.container}>
          <View style={styles.main}>
            <Text style={styles.title}>Local</Text>
            <Text style={styles.subtitle}>Find Local Food. Fast.</Text>
    
            <View> 
            <TouchableOpacity style={styles.findButton}>
              <Link href="authentication/SignIn" style={styles.findText}> Find Vendors </Link>
            </TouchableOpacity>
            </View>
          </View>
        </View>
        )
      }
    </>
  )
  if (isLoggedIn) {
    // redirect to home page if logged in
    return <AuthProvider>
            
          </AuthProvider>
  }
  // navigate to home page
  return (
  <AuthProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  findButton: {
    margin: 20, 
    padding: 5, 
    alignItems: 'center', 
    borderRadius: 10, 
  }, 
  findText: {
    fontSize: 20
  }
});
