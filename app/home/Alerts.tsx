import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput, 
  TouchableOpacity, 
  useColorScheme,
  View,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
// import { Auth } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';
// import userPageStyle from '../styles/userPageStyle';
// import ComfortaaText from '../styles/fonts/ComfortaaText';
import AlertItem from '../../components/alertItem';
import appStyles from '../../assets/appStyles';
import { useRouter } from 'expo-router';
import { AuthContext } from '../../util/AuthProvider';
import MapView, { Marker } from 'react-native-maps';

const dummyAlerts = {
    alerts: [
        {
            title: "Katie's Fired", 
            subText: 'For lack of work on the project...'
        }, 

        {
            title: "On the Move", 
            subText: 'Your favorite Vendor, Gina, is on the move'
        }, 

        {
            title: "Closing Soon...", 
            subText: "Pablo's Paleteria is closing in 1 hour"
        }, 

        {
            title: "Welcome to Local", 
            subText: "Click here to turn on notifications"
        }
    ]
}

const AlertList:any = () => {
    return (
        dummyAlerts.alerts.map((alert, key) => (
            <AlertItem
            key={key}
            title={alert.title}
            subText={alert.subText}
            />
        ))
    )
}

export default function Alerts() {

    const router = useRouter()
    const {logout} = useContext(AuthContext)
    const sfRegion = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }

    return (
        <SafeAreaView style={{backgroundColor: "#887676", height: '100%'}}>
            <ScrollView style={[appStyles.fullView]}
            contentInsetAdjustmentBehavior="automatic">
                <View style={appStyles.container}>
                    <Text style={{fontSize: 30, marginBottom: 10}}>Alerts</Text>
                    <View>
                        <AlertList/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}


const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '50%',
    }
})