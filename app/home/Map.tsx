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

// import { Auth } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';
// import userPageStyle from '../styles/userPageStyle';
// import ComfortaaText from '../styles/fonts/ComfortaaText';
import AlertItem from '../../assets/components/alertItem';
import appStyles from '../../assets/appStyles';
import { useRouter } from 'expo-router';
import { AuthContext } from '../../util/AuthProvider';


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

export default function Map() {

    const router = useRouter()
    const authValue = useContext(AuthContext)

    function signOut () {
        authValue?.setAuth({isLoggedIn: false})
        router.replace("/")
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
                    <TouchableOpacity style={{alignItems: 'center', margin: 10, backgroundColor: 'grey', padding: 10}}
                    onPress={() => signOut()}
                    >
                        <Text style={{fontSize: 30}}> Logout </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

