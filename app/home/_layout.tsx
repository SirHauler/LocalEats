import { Tabs } from "expo-router/tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useContext, useEffect, useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native"
import { AuthContext } from "../../util/AuthProvider";
import currentUser from "../../util/currentUser";
import { useRouter } from "expo-router";

export default function Layout() {
  const [username, setUsername] = useState('')
  const router = useRouter()
  useEffect(() => {
    currentUser(setUsername)
  }, [])
  return (
    <Tabs initialRouteName="Map" 
    screenOptions={{
        headerShown: false, 
        tabBarShowLabel: false
    }}>

    <Tabs.Screen name="Map" 
    options={{
      tabBarIcon: () => 
      <Ionicons name="home-sharp" size={20} />,  
    }}
    />

    <Tabs.Screen name="Explore"
    options={{
      tabBarIcon: () => 
      (<Ionicons name="search-sharp" size={20}/>), 
    }}
    />

    <Tabs.Screen name="Alerts"
    options={{
      tabBarIcon: () => 
      <Ionicons name="notifications-sharp" size={20}/>, 
    }}
    />

    <Tabs.Screen name="Profile"
    options={{
      tabBarIcon: () =>
      (<Ionicons name="person-sharp" size={20}/>), 
      headerShown: true, 
      headerTitle: '', 
      headerLeft: () => (<Text style={styles.headerLeft}>{username}</Text>), 
      headerRight: () => (
        <TouchableOpacity style={styles.headerRight} onPress={() => router.push("settings/Settings")}>
          <Ionicons name="menu-sharp" size={30}/>
        </TouchableOpacity>
      )
    }}/>


    </Tabs>

  )

}

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 10, 
    fontSize: 30,
    fontWeight: '400'
  }, 
  headerRight: {
    marginRight: 10,
  }
})