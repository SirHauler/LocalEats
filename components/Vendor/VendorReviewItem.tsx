import * as React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export interface VendorReviewItemProps {
}

export function VendorReviewItem (props: VendorReviewItemProps) {
    return (
    <View style={styles.ReviewView}>
        <Pressable style={({pressed}) => 
        [
            pressed ? {opacity: 0.5} : {}, 
            styles.ReviewPressable
        ]
      }>

        <View style={styles.ReviewHeaderView}>
            <View style={styles.ReviewerPhotoView}>

            </View>

            <View style={styles.ReviewerInfoView}>
                <Text>Reviewer Name</Text>
                <Text>Rating</Text>
            </View>
        </View>

        <View style={styles.ReviewTextView}>
            <Text style={styles.ReviewText}>Review</Text>
        </View>
      </Pressable>

      </View>
    );
}


const styles = StyleSheet.create({
    ReviewView: {
        height: 70, 
        margin: 15,
    }, 
    ReviewPressable: {
        backgroundColor: 'grey',
        borderRadius: 10, 
        padding: 10
    }, 
    ReviewHeaderView: {
        borderColor: 'red', 
        flexDirection: 'row',
    }, 
    ReviewTextView: { 
        marginTop: 10 
    },  
    ReviewText: {
    }, 
    ReviewerPhotoView: {
        height: 40, 
        width: 40, 
        borderRadius: 20, 
        backgroundColor: 'black', 
    }, 
    ReviewerInfoView: {
        marginLeft: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
    }, 
})