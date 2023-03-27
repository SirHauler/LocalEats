import { Tabs } from "expo-router/tabs";

export default function Layout() {
  return <Tabs initialRouteName="Map" 
    screenOptions={{
        headerShown: false
    }}/>;
}