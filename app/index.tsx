import "expo-router/entry";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState, createContext, useContext, useCallback } from "react";
import { Link, Redirect } from "expo-router";
import { Amplify } from 'aws-amplify'; 
import awsmobile from "../src/aws-exports";
import { AuthContext } from "../util/AuthProvider";
import * as SplashScreen from 'expo-splash-screen';
import '@azure/core-asynciterator-polyfill'
import Ionicons from '@expo/vector-icons/Ionicons';
Amplify.configure(awsmobile);


SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [appIsReady, setAppIsReady] = useState(false);
  const {user} = useContext(AuthContext)

  useEffect(() => {
    async function prepare() {
      try {
        // await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e)
      }
        finally {
          setAppIsReady(true); 
      }
    }

    prepare()
  }, []); 

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady])
  // console.log(authValue?.auth.isLoggedIn)
  console.log("User: " + user)

  if (!appIsReady) {
    return null
  }
  return (
    <>
      {
        user != null ? (
          <Redirect href="/home/Map"/>
        ) : (
          <View style={styles.container} onLayout={onLayoutRootView}>
            <View style={styles.main}>
              <Text style={styles.title}>Local</Text>
              <Text style={styles.subtitle}>Find Local Food. Fast.</Text>
      
              <View> 
              <View style={styles.optionsView}>
                <Link href="authentication/SignIn" asChild> 
                  <TouchableOpacity style={styles.authButtons}>
                    <Ionicons name="lock-open-sharp" size={25}/>
                    <Text style={styles.findText}>Login</Text>
                  </TouchableOpacity> 
                </Link>
                
                <Link href="authentication/SignUp" asChild>
                   <TouchableOpacity style={styles.authButtons}>
                    <Ionicons name="person-add-sharp" size={25}/>
                      <Text style={styles.findText}>Register</Text>
                   </TouchableOpacity>
                </Link>
              </View>
              </View>
            </View>
        </View>
        )
      }
    </>
  )
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
  optionsView: {
    margin: 20, 
    padding: 5, 
    alignItems: 'center', 
    borderRadius: 10,
  }, 
  findText: {
    fontSize: 20, 
    textAlign: 'center', 
    marginHorizontal: 15, 
  }, 
  authButtons: {
    borderWidth: 2, 
    margin: 4, 
    borderRadius: 20, 
    backgroundColor: 'grey', 
    width: 150, 
    flexDirection: 'row', 
    padding: 10, 
  }
});
