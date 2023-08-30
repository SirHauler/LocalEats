import React, {ReactComponentElement, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { API } from 'aws-amplify';
import MapView, { Marker } from 'react-native-maps';
import { LazyVendorInfo } from '../../src/models';
import fetchVendors from '../../util/fetchVendors';
import { SearchBar } from '../../components/Map/SearchBar';
import { HorizontalVendorScrollView } from '../../components/Map/HorizontalVendorScrollView';
import * as Location from 'expo-location'; 
export type MapPageProps = {

}

type Location = {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
}

const Map: React.FC<MapPageProps> = ({

}) => {
    const [vendorData, setVendorData] = useState<LazyVendorInfo[]>([]);
    const [location, setLocation] = useState<object>({});
    const [errorMsg, setErrorMsg] = useState(""); 
    useEffect(() => {
        fetchVendors(setVendorData)
    }, [])

    useEffect(() => {
        API.get('LocalEatsGeocodingAPI', '/geocoding/address', {})
        .then((response) => {
            console.log(response); 
        })
        .catch((error) => console.log(error.response))
    }, [])

    useEffect(() => {
        (async () => {
      
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
              setErrorMsg('Permission to access location was denied');
              return;
            }
      
            let location = await Location.getCurrentPositionAsync({});
            const curLocation: Location = {
                latitude: location["coords"]["latitude"], 
                longitude: location["coords"]["longitude"], 
                latitudeDelta: 0, 
                longitudeDelta: 0
            }
            setLocation(location);
            setFocusedLocation(curLocation);
        
          })();
    }, []); 

    const sfRegion = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    const [focusedLocation, setFocusedLocation] = useState<Location> (sfRegion); 

    return (
        <View style={styles.map}>
            <MapView style={{flex: 1}} provider="google"
                        initialRegion={focusedLocation}
                >
                <Marker coordinate={focusedLocation}/>
            </MapView>

            <SearchBar/>

            <HorizontalVendorScrollView 
                vendorData={vendorData}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    }, 
})




export default Map; 