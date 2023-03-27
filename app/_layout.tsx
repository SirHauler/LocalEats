import { Stack } from "expo-router/stack";
import { Slot } from "expo-router";
import AuthProvider from "../util/AuthProvider";

export default function Layout() {
  return (
    <AuthProvider>
      <Slot/>
    </AuthProvider>
  ) 
  
  // <Stack initialRouteName="index" 
  //     screenOptions={{
  //         headerShown: false
  //     }}/>
}