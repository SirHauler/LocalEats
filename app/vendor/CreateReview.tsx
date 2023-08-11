import * as React from 'react';
import { View, Text, SafeAreaView, Pressable, TextInput, StyleSheet} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { AuthContext } from '../../util/AuthProvider';
import { ReviewUserInfo } from '../../components/Vendor/Review/ReviewUserInfo';
import { useState, useContext } from 'react';
import { DataStore } from 'aws-amplify';
import { Review } from '../../src/models';
import { useLocalSearchParams } from 'expo-router';

export interface CreateReviewProps {
}

const RatingButtons = [1, 2, 3, 4, 5]

async function createReview(
    userID: string, 
    vendorID: string, 
    reviewerName: string, 
    rating: number, 
    comment: string, 
    s3_bucket_url: string
){
    try {
        await DataStore.save(
            new Review({
                "user_id": userID, 
                "vendor_id": vendorID, 
                "reviewerName": reviewerName, 
                "rating": rating, 
                "comment": comment, 
                "s3_photo_bucket_url": s3_bucket_url
            })
        );
    } catch (error) {
        console.log(error)
    }
}


const CreateReview: React.FC<CreateReviewProps> = (props) => {
    const router = useRouter();
    const {user} = useContext(AuthContext);
    const reviewerName = user.attributes.name + " " + user.attributes.family_name; 
    const [activeButton, setActiveButton] = useState<number>(-1); 
    const [comment, setComment] = useState<string>(""); 
    const [s3_bucket_url, setS3_bucket_url] = useState<string>("");
    const {attributes} = user; 
    const {vendorID, vendorName} = useLocalSearchParams();

    const getButtonStyle = (buttonNumber: number) => {
        return activeButton === buttonNumber ? styles.activeButton : styles.inactiveButton; 
    }
    
    const handleButtonPress = (buttonNumber: number) => {
        setActiveButton(buttonNumber);
    }

    const handlePublish = () => {
        const rating = activeButton;
        if (rating === -1) {
            console.warn("Missing Rating"); 
            return;
        } 
        if (comment === "") {
            console.warn("Missing Comment"); 
            return;
        }
        createReview(
            user.attributes.sub, 
            vendorID, 
            reviewerName, 
            rating, 
            comment, 
            s3_bucket_url
        )
        
        router.back();
    }

    return (
      <SafeAreaView>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Pressable onPress={() => router.back()} style={{marginLeft: 10}}>
                <Ionicons name='close' size={30}/>
            </Pressable>

            <Text style={styles.header}>{vendorName}</Text>

            <Pressable 
                style={styles.PublishButton}
                onPress={handlePublish}
            >
                <Text>Publish</Text>
            </Pressable>
        </View>

        <ReviewUserInfo
            reviewerName={attributes.name}
            reviwerFamilyName={attributes.family_name}
        />

            <Text style={styles.CommentHeader}>
                Rating
            </Text>

            <View style={styles.RatingButtonView}>
                {
                    RatingButtons.map((id) => (
                        <Pressable 
                            style={getButtonStyle(id)}
                            key={id}
                            onPress={() => handleButtonPress(id)}
                        >
                            <Text>{id}</Text>
                        </Pressable>
                    )
                    )
                }
            </View>

        <View>
            <Text style={styles.CommentHeader}>Comment</Text>
            <TextInput
                value={comment}
                onChangeText={setComment}
                style={styles.ReviewCommentInput}
                multiline={true}
                placeholder='Share your experience'
            />
        </View>

      </SafeAreaView>
    );
}

export default CreateReview;


const styles = StyleSheet.create({
    ReviewCommentInput: {
        minHeight: 100, 
        borderWidth: 1, 
        borderRadius: 10, 
        padding: 10, 
        margin: 15, 
    }, 
    CommentHeader: {
        marginLeft: 15, 
        fontSize: 20
    }, 
    PublishButton: {
        borderWidth: 1, 
        marginRight: 10,
        justifyContent: 'center', 
        paddingHorizontal: 10, 
        borderRadius: 10
    }, 

    RatingButtonView: {
        flexDirection: 'row', 
        alignSelf: 'center'
    }, 
    activeButton: {
        borderWidth: 1, 
        width: 40, 
        height: 20, 
        margin: 10, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 5, 
        backgroundColor: '#999999'
    }, 
    inactiveButton: {
        borderWidth: 1, 
        width: 40, 
        height: 20, 
        margin: 10, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 5, 
    }, 
    header: {
        fontSize: 25
    }
}); 