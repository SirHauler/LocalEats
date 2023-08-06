import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect , useContext, useState} from 'react';
import {
    Pressable, 
    SafeAreaView, 
    ScrollView, 
    Text,
    StyleSheet, 
    View, 
    ActivityIndicator,
  } from 'react-native';

import { DataStore, Storage } from 'aws-amplify';
import Ionicons from '@expo/vector-icons/Ionicons';
import appStyles from '../../assets/appStyles';
import { Review, VendorInfo } from '../../src/models';
import { VendorReviewItem } from '../../components/Vendor/VendorReviewItem';
import photoCarousel from '../../components/Vendor/PhotoCarousel';
import getReviews from '../../util/getReviews';
import { specials_to_string } from '../../util/specials_to_string';


async function getVendorInfo(vendorID: string, setVendorInfo: React.Dispatch<React.SetStateAction<object>>) {
  const vendorInfo = await DataStore.query(VendorInfo, (c) => c.id.eq(vendorID));
  setVendorInfo(vendorInfo[0]);
}


const DirectionButtons = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      <View style={styles.googleMapsButtonView}>
        <Pressable style={styles.googleMapsButton}>
          <Text>See On Map</Text>
        </Pressable>
      </View>

      <View style={styles.googleMapsButtonView}>
        <Pressable style={styles.googleMapsButton}>
          <Text>Directions</Text>
        </Pressable>
      </View>
    </View>
  )
}


export type Props = {

}

  const VendorPage: React.FC<Props> = (props) => {
    
    const router = useRouter();
    const {vendorID} = useLocalSearchParams();
    const [vendorInfo, setVendorInfo] = useState<VendorInfo>();
    const [specials, setSpecials] = useState("");
    const [photoURIs, setPhotoURIs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState<Review[]>([]); 
    useEffect(() => {
      getVendorInfo(vendorID, setVendorInfo); 
    }, [])

    useEffect(() => {
      getReviews(vendorID, setReviews)
    }, [])

    useEffect(() => {
      setSpecials(specials_to_string(vendorInfo?.specialties))
    }, [])

    useEffect(() => {
      const fetchPhotos = async () => {

        try {
          const query = "vendors/photos/" + vendorID + "/";  
          const photos = await Storage.list(query, {
            pageSize: 'ALL'
          });
          const filteredPhotos = photos.results.filter((photo) => photo.size > 0);
          const photoKeys = filteredPhotos.map((photo) => photo.key)
          const photoURIs_arr = await Promise.all(photoKeys.map(fetchPhotoURI)); 
          setLoading(false);
          setPhotoURIs(photoURIs_arr);
        } catch (error) {
          console.log(error);
        }
        
      }

      const fetchPhotoURI = async (photoKey: string) => {
        try {
          const photoURI = await Storage.get(photoKey);
          return {photoURI: photoURI};
        } catch (error) {
          console.error('Error fetching photo URI:', error);
          return null;
        }
      };

      fetchPhotos(); 

    }, []); 
    
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <View style={appStyles.container}>

          <View style={styles.vendorViewHeader}>
            <Text style={appStyles.header}>{vendorInfo?.name}</Text>

            <View style={styles.vendorRatingView}>
              <Text style={{fontSize:25}}>{vendorInfo?.rating}</Text>
              <Ionicons name="star" size={15} color="gold" style={{paddingLeft: 10}}/>
            </View>
            
          </View>

          <View style={styles.photoView}>

          {
            loading ? (
              <ActivityIndicator size="large" color="#999999" />
            ): (
              photoCarousel(photoURIs)
            )
          }

          </View>
              <View style={{alignItems: 'center', paddingTop: 15,}}>
                  <Text style={{fontSize: 18}}>{specials}</Text>
              </View>


            <DirectionButtons/>


            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={[appStyles.header, {fontSize: 25}]}>Reviews</Text>
              <Pressable>
                <Ionicons name='add-circle-outline' size={30} style={{margin: 10}}/>
              </Pressable>
            </View>

            {
              reviews?.map((review) => {
                return (
                  <VendorReviewItem key={review.id}
                    rating={review.rating}
                    reviewerName="Josh"
                    review={review.comment}
                    />)
              })
            }

            <Pressable style={{paddingTop: 30}} onPress={() => router.back()}>
               <Text>Go Back!</Text>
            </Pressable>
          </View>
        </ScrollView> 
      </SafeAreaView>
    )
  }

  export default VendorPage;




  const styles = StyleSheet.create({
  
    vendorViewHeader: {
      flexDirection: "row", 
      alignItems: 'center',
      width: '95%'
    }, 
    vendorRatingView: {
      flexDirection: "row", 
      alignItems: 'center',
      marginLeft: 'auto',
    }, 

    photoView: {
      alignItems: 'center',
      height: 225, 
      justifyContent: 'center'
    }, 

    googleMapsButtonView: {
      alignItems: 'center',
      margin: 5
    }, 

    googleMapsButton: { 
      borderRadius: 20, 
      padding: 10, 
      backgroundColor: '#999999',
      marginTop: 10
    }
  }); 