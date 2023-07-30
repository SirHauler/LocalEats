import * as React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { LazyVendorInfo } from '../../src/models';
import VendorComponent from '../Vendor/VendorComponent';
export interface HorizontalVendorScrollViewProps {
    vendorData: LazyVendorInfo[]
}

export function HorizontalVendorScrollView (props: HorizontalVendorScrollViewProps) {
    return (
        <View style={styles.vendorScroll}>
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={1}>
                
                {props.vendorData.map((vendor, key) => {
                    return (
                        <VendorComponent 
                            userid={vendor.userid}
                            id={vendor.id}
                            specialties={vendor.specialties}
                            hours={vendor.hours}
                            name={vendor.name}
                            rating={vendor.rating}
                            address={vendor.address}
                            key={key}/>
                    )
                })}
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    vendorScroll: {
        position: 'absolute',
        alignSelf: 'center', 
        bottom: 10, 
        justifyContent: 'space-between', 
    },
}); 