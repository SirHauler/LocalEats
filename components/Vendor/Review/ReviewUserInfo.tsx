import * as React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';


export interface ReviewUserInfoProps {
    reviewerName: string, 
    reviwerFamilyName: string
}

export function ReviewUserInfo (props: ReviewUserInfoProps) {
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
                <Text style={{fontWeight: '500'}}>
                    {props.reviewerName} {props.reviwerFamilyName}
                </Text>

                <Text style={{fontSize: 12, marginTop: 5}}>
                    Will be viewable publicly
                </Text>
            </View>
        </View>

      </Pressable>

      </View>
    );
}

const styles = StyleSheet.create({
    ReviewView: {
        margin: 5,
    }, 
    ReviewPressable: {
        // backgroundColor: '#999999',
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
    }, 
})
