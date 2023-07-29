import React, {ReactComponentElement, useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';


import MapView, { Marker } from 'react-native-maps';
import VendorComponent from '../../components/vendorComponent';
import { LazyVendorInfo } from '../../src/models';
import fetchVendors from '../../util/fetchVendors';
import { SearchBar } from '../../components/Map/SearchBar';
import { HorizontalVendorScrollView } from '../../components/Map/HorizontalVendorScrollView';
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
    useEffect(() => {
        fetchVendors(setVendorData)
    }, [])

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