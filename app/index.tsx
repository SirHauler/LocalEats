import "expo-router/entry";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState, createContext, useContext, useCallback } from "react";
import { Link, Redirect } from "expo-router";
import { Amplify } from 'aws-amplify'; 
import awsmobile from "../src/aws-exports";
import { AuthContext } from "../util/AuthProvider";
import * as SplashScreen from 'expo-splash-screen';
import '@azure/core-asynciterator-polyfill'
Amplify.configure(awsmobile);


SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [appIsReady, setAppIsReady] = useState(false);
  const {user} = useContext(AuthContext)

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
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
        user ? (
          <Redirect href="/home/Map"/>
        ) : (
          <View style={styles.container} onLayout={onLayoutRootView}>
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
