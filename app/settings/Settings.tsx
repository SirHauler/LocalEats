import React, {useState, useContext, useEffect} from 'react';
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
import { useRouter } from 'expo-router';
import { AuthContext } from '../../util/AuthProvider';
import appStyles from '../../assets/appStyles';
import {useFonts, Roboto_200Black} from '@expo-google-fonts/roboto'

export type Props = {

}

const Settings: React.FC<Props> = ({

}) => {
    let [fontsLoaded] = useFonts({
        Roboto_200Black
    })
    const router = useRouter()
    const { user, logout } = useContext(AuthContext)
    const {attributes} = user


    return (
        <SafeAreaView style={appStyles.safeAreaView}>
            <ScrollView>
                <View>
                    <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                        <Ionicons name='arrow-back-sharp' size={30}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.scrollView}>

                    <View style={styles.userAttributesView}>
                        <Text style={styles.userAttributesText}>{attributes.name} {attributes.family_name}</Text>
                        <Text style={styles.userAttributesText}>{attributes.email}</Text>
                        <Text style={styles.userAttributesText}>Placeholder</Text>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.logoutButton}
                            onPress={() => logout()}
                        >
                            <Text style={{fontSize: 20, fontWeight: '500'}}> Logout </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.logoutButton}
                            onPress={() => router.push("vendor/VendorPage")}
                        >
                            <Text style={{fontSize: 20, fontWeight: '500'}}> Vendor Page Test! </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        alignItems: 'center'
    }, 
    backButton: {
        marginLeft: 10
    }, 
    logoutButton: {
        alignItems: 'center', 
        margin: 10, 
        backgroundColor: 'grey', 
        padding: 10, 
        borderRadius: 20, 
        width: '50%', 
        alignSelf: 'center', 
        borderWidth: 2, 
    }, 
    userAttributesView: {
        width: '70%',
        margin: 20
    }, 
    userAttributesText: {
        margin: 5,  
        fontSize: 20
    }

})

export default Settings; 