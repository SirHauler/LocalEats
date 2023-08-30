import { useRouter } from 'expo-router';
import React, {useState, useContext, useEffect} from 'react';
import {
Pressable,
  StyleSheet,
  Text,
  TextInput, 
  TouchableOpacity, 
  useColorScheme,
  View,
} from 'react-native';
import { AddressJSON, HoursJSON } from '../../src/models';
import getDayOfWeek from '../../util/getDayOfWeek';
import { specials_to_string } from '../../util/specials_to_string';


export type Props = {
    userid: string | null | undefined,
    id: string | undefined | null,
    specialties: [] | undefined | null,
    hours: HoursJSON | undefined | null,
    name: string | undefined | null,
    rating: number | undefined | null,
    address: AddressJSON | undefined | null,
}
const VendorComponent: React.FC<Props> =  ({
    userid, 
    id, 
    specialties, 
    hours,
    name, 
    rating, 
    address, 
}) => {
    const router = useRouter();
    const todaysHours: number[] = getDayOfWeek(hours);
    const [specials, setSpecials] = useState(''); 
    const [open, setOpen] = useState(todaysHours[0])
    const [close, setClose] = useState(todaysHours[1])
    
    useEffect(() => {
        setSpecials(specials_to_string(specialties))
    }, [])

    return (
        <Pressable style={[styles.vendorBox]}
            onPress={() => router.push({pathname: '/vendor/VendorPage', params: {
                vendorID: id,
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

                    <Text style={styles.vendorText}>{address?.streetAddress}</Text>
                    <Text style={styles.vendorText}>Placeholder Address</Text>

                    <Text style={styles.vendorText}>Open: {open} - {close}</Text>
                </View>

            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    vendorItemContainer: {
        flexDirection: 'row',  
        backgroundColor: '#89959c', 
        borderRadius: 5, 
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
        width: 'auto', 
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
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
