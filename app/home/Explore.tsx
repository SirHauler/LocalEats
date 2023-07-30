import React, {useState, useContext, useEffect, useCallback} from 'react';
import {
  RefreshControl,
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

import appStyles from '../../assets/appStyles';
import { useServerState } from 'expo-router/src/static/useServerState';
import { API, Auth, DataStore} from 'aws-amplify';

import VendorComponent from '../../components/Vendor/VendorComponent';
import { LazyVendorInfo, VendorInfo } from '../../src/models';
import fetchVendors from '../../util/fetchVendors';
export type Props = {

}

const Explore: React.FC<Props> = ({

}) => {
    const [vendorData, setVendorData] = useState<LazyVendorInfo[]>([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        fetchVendors(setVendorData)
        const sub = DataStore.observe(VendorInfo).subscribe(msg => {
            console.log(msg.model, msg.opType, msg.element);
            onRefresh(); //
        });

        return() => {
            sub.unsubscribe()
        }
    }, [])


    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
        fetchVendors(setVendorData) // re-fetches data on refresh
    }, [])
    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing}
                                    onRefresh={onRefresh}/>
                }
            >
                <View style={appStyles.container}>
                    <Text style={appStyles.header}>
                        Explore
                    </Text>
                    <View>
                    {vendorData.map((vendor, key) => {
                        return (<VendorComponent 
                            userid = {vendor.userid}
                            id = {vendor.id}
                            specialties={vendor.specialties}
                            hours={vendor.hours}
                            name={vendor.name}
                            rating={vendor.rating}
                            address={vendor.address}
                            key={key}/>)
                    })
                    }
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}



export default Explore; 
