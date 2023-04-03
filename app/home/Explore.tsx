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
import { useNavigation } from '@react-navigation/native';
import AlertItem from '../../components/alertItem';
import appStyles from '../../assets/appStyles';
import { AuthContext } from '../../util/AuthProvider';
import { useServerState } from 'expo-router/src/static/useServerState';
import { API, Auth, DataStore, graphqlOperation} from 'aws-amplify';
import { GraphQLSubscription } from '@aws-amplify/api';
import { onCreateTodo } from './graphql/subscriptions';
import { OnCreateTodoSubscription } from './API';
import VendorComponent from '../../components/vendorComponent';
import { LazyVendorInfo, VendorInfo } from '../../src/models';
import fetchVendors from '../../util/fetchVendors';
export type Props = {

}

const Explore: React.FC<Props> = ({

}) => {
    const [vendorData, setVendorData] = useState<LazyVendorInfo[]>([]);
    const [refreshing, setRefreshing] = useState(false);

//     const sub = DataStore.observeQuery(VendorInfo, (c) =>
//     c.id.eq('e4dd1dc5-e85c-4566-8aaa-54a801396456')
//   ).subscribe(({ items }) => {
//     setVendorData(items);
//   });

    useEffect(() => {
        // console.log("Vendors: \n" + JSON.stringify(vendorData))
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
                            specialties={vendor.specialities}
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
