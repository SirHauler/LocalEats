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
import VendorComponent from '../../assets/components/vendorComponent';
import { DataStore } from 'aws-amplify';
import { LazyVendorInfo, VendorInfo } from '../../src/models';
export type Props = {

}

const Explore: React.FC<Props> = ({

}) => {
    const [vendorData, setVendorData] = useState<LazyVendorInfo[]>([]);
    async function fetchVendors() {
        try {
            const vendors = await DataStore.query(VendorInfo); 
            console.log("Here: " + JSON.stringify(vendors))
            setVendorData(vendors)   
        } catch (e) {
            console.warn(e)
        }

    }
    useEffect(() => {
        fetchVendors(); 
        // console.log("Vendors: \n" + JSON.stringify(vendorData))
    }, [])
    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                <View style={appStyles.container}>
                    <Text style={appStyles.header}>
                        Explore
                    </Text>
                    <View>
                    {vendorData.map((vendor, key) => {
                        return (<VendorComponent specialties={vendor.specialities} key={key}/>)
                    })
                    }
                </View>
                </View>



            </ScrollView>
        </SafeAreaView>
    )
}



export default Explore; 
