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

export type Props = {
    specialties: string | undefined | null, 
}
const VendorComponent: React.FC<Props> =  ({
    specialties
}) => {
    const food = specialties["food"]; 
    return (
        <TouchableOpacity style={styles.vendorBox}>
            <View style={styles.vendorItemContainer}>
                <View style={styles.starAndRatingContainer}>
                    <View style={styles.circle}>
                    </View>

                    <View style={styles.stars}>
                    <Text>
                        <Ionicons name='star' size={12}/>
                        <Ionicons name='star' size={12}/>
                        <Ionicons name='star' size={12}/>
                        <Ionicons name='star' size={12}/>
                        <Ionicons name='star' size={12}/>
                    </Text>
                    </View>
                </View>

                <View style={styles.vendorInfoView}>
                    <Text style={styles.vendorText}>
                        {food}
                    </Text>

                    <Text style={styles.vendorText}>.5 miles</Text>

                    <Text style={styles.vendorText}>Open: 10am - 11pm</Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    vendorItemContainer: {
        flexDirection: 'row', 
        backgroundColor: '#887676', 
        borderRadius: 10, 
        flex: 1, 
        width: 300, 
        overflow: 'hidden', 
    }, 
    vendorBox: {
        height: 100, 
        backgroundColor: 'white', 
        margin: 10, 
        borderRadius: 10,
        alignItems: 'center'
    }, 
    starAndRatingContainer: {
        height: '100%', 
        width: '30%', 
        alignItems: 'center', 
    }, 
    circle: {
        height: 60, 
        width: 60, 
        backgroundColor: 'black', 
        borderRadius: 100, 
        marginTop: 10
    }, 
    stars: {
        marginTop: 5
    }, 
    vendorInfoView: {
        width: 150, 
        justifyContent: 'space-evenly'
    }, 
    vendorText: {
    }, 
})

export default VendorComponent; 