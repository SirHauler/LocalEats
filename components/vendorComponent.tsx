import { useRouter } from 'expo-router';
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

export type Props = {
    specialties: [], 
    hours: [
        Monday : {
            open: string, 
            close: string, 
        }, 
        Tuesday: {
            open: string, 
            close: string, 
        }
    ]
    // TODO: check if the above is all good :)
    name: string | undefined | null,
    rating: number, 
    address: {
        address: {
            zipcode: string, 
            streetAddress: string, 
            city: string, 
            state: string,
        }
    } | string | null | undefined
}
const VendorComponent: React.FC<Props> =  ({
    specialties, 
    hours,
    name, 
    rating, 
    address, 
}) => {
    const router = useRouter();
    const [specials, setSpecials] = useState('')
    const [open, setOpen] = useState(hours["Monday"]["Open"])
    const [close, setClose] = useState(hours["Monday"]["Close"])
    // const [address, setAddress] = useState(address)
    useEffect(() => {
        let res = ""
        for (let i = 0; i < specialties.length; i++) {
            if (i == specialties.length - 1) {
                res += specialties[i]
            } else {
                res += specialties[i] + ", "
            }
            
        }
        setSpecials(res)
    }, [])
    return (
        <TouchableOpacity style={[styles.vendorBox, {shadowColor: 'black', shadowOpacity: .5,  shadowOffset: {width: -3, height: 3}}]}
            onPress={() => router.push({pathname: '/vendor/VendorPage', params: {
                name: name, 
                specialties: specials, 
                hours: hours,
                rating: rating,
                address: address,
            }})}>
            <View style={styles.vendorItemContainer}>
                <View style={styles.starAndRatingContainer}>
                    <View style={styles.circle}>
                    </View>

                    <View style={styles.stars}>
                    <Text>
                        {rating}/5
                    </Text>
                    </View>
                </View>

                <View style={styles.vendorInfoView}>
                    <Text>
                        {name}
                    </Text>
                    <Text style={styles.vendorText}>
                        {specials}
                    </Text>

                    <Text style={styles.vendorText}>{address.address.streetAddress}</Text>

                    <Text style={styles.vendorText}>Open: {open} - {close}</Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    vendorItemContainer: {
        flexDirection: 'row',  
        backgroundColor: '#89959c', 
        borderRadius: 10, 
        flex: 1, 
        width: 300, 
        overflow: 'hidden', 
    }, 
    vendorBox: {
        height: 120, 
        // backgroundColor: 'white', 
        margin: 10, 
        borderRadius: 10,
        alignItems: 'center', 
        width: 'auto'
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
