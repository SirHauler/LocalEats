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

// import { Auth } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';
import AlertItem from '../../assets/components/alertItem';
import appStyles from '../../assets/appStyles';
import { AuthContext } from '../../util/AuthProvider';
import { useServerState } from 'expo-router/src/static/useServerState';
import { Auth } from 'aws-amplify';
import currentUser from '../../util/currentUser';

const foodTypes = [
    "Tacos", 
    "Tortas", 
    "Pupusas", 
    "Gorditas"
]

export type Props = {

}

const Profile:React.FC<Props> = ({

}) => {

    // async function currentUser() {
    //     try {
    //       const attributes = await Auth.currentUserInfo(); 
    //       console.log("Current User Retrieved", attributes.attributes.name + " " + attributes.attributes.family_name)
    //       setUsername(attributes.attributes.name + " " + attributes.attributes.family_name)
    //     } catch (error) {
    //       console.log('error in retrieving current user', error)
    //     }
    //   }
        
    // useEffect(() => {
    //     currentUser()
    // }, [])
    return (
       <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                <View style={appStyles.container}>
                    <View style={styles.preferenceContainer}>
                        {foodTypes.map((food, key) => {
                            return (
                                <View style={styles.foodItemContainer} key={key}>
                                    <TouchableOpacity style={styles.foodItemButton}>
                                        <Text style={styles.foodItemText}>{food}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })}
                    </View>
                </View>
            </ScrollView>
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    preferenceContainer: {
        borderRadius: 15,
        height: 500,
    }, 
    foodItemContainer: {
        alignItems: 'center', 
        margin: 5
    }, 
    foodItemButton: { 
        borderWidth: 3, 
        borderRadius: 15,
        width: '70%', 
        alignItems: 'center', 
    }, 
    foodItemText: {
        fontSize: 20, 
        margin: 3
    }
})

export default Profile; 