import * as React from 'react';
import { View, Text, SafeAreaView, Pressable, TextInput, StyleSheet} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { useContext } from 'react';
import { AuthContext } from '../../util/AuthProvider';
import appStyles from '../../assets/appStyles';
import { ReviewUserInfo } from '../../components/Vendor/Review/ReviewUserInfo';
export interface CreateReviewProps {

}



const CreateReview: React.FC<CreateReviewProps> = (props) => {
    const router = useRouter();
    const {user} = useContext(AuthContext);
    const {attributes} = user; 
    return (
      <SafeAreaView>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Pressable onPress={() => router.back()} style={{marginLeft: 10}}>
                <Ionicons name='close' size={30}/>
            </Pressable>

            <Pressable style={styles.PublishButton}>
                <Text>Publish</Text>
            </Pressable>
        </View>

        <ReviewUserInfo
            reviewerName={attributes.name}
            reviwerFamilyName={attributes.family_name}
        />


        <View>
            <Text style={styles.CommentHeader}>
                Rating
            </Text>
        </View>

        <View>
            <Text style={styles.CommentHeader}>Comment</Text>
            <TextInput
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
        height: 100, 
        borderWidth: 1, 
        paddingHorizontal: 10, 
        margin: 15
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
    }
}); 