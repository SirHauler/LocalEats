import { Stack } from "expo-router/stack";
import { Text, TextInput, View, TouchableOpacity } from 'react-native'

export default function Layout() {
  return <Stack initialRouteName="SignIn" 
    screenOptions={{
        headerShown: false
    }}/>;
}