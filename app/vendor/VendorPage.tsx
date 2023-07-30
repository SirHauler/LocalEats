import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect , useContext, useState} from 'react';
import {
    Pressable, 
    SafeAreaView, 
    ScrollView, 
    Text,
    TextInput, 
    TouchableOpacity, 
    StyleSheet, 
    View, 
    Image,
    ActivityIndicator,
    FlatList
  } from 'react-native';

import Carousel from 'react-native-reanimated-carousel';
import { DataStore, Storage } from 'aws-amplify';
import Ionicons from '@expo/vector-icons/Ionicons';
import appStyles from '../../assets/appStyles';
import { VendorInfo, VendorInfoMetaData } from '../../src/models';
import { VendorReviewItem } from '../../components/Vendor/VendorReviewItem';


async function getVendorInfo(vendorID: string, setVendorInfo: React.Dispatch<React.SetStateAction<object>>) {
  // get vendorinfo using DataStore
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

const photoCarousel = (photoURIs: any) =>{

  if (photoURIs.length == 0) {
    return (
    <Text style={{fontSize: 20}}>No Photos, Yet...📷</Text>
    )
  }

  return (
    <View style={{}}>
    <Carousel
        loop
        width={350}
        height={225}
        autoPlay={false}
        data={photoURIs}
        scrollAnimationDuration={4000}
        onSnapToItem={(color) => console.log('current index:', color)}
        renderItem={({ item }) => (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                }}
            >
                <Image source={{uri: item.photoURI}}
                  style={styles.image}
                />
            </View>
        )
      }
    />
  </View>
  )
}



const reviews = [
  {key: '1'}, 
  {key: '2'},
  {key: '3'},
]

export type Props = {

}

  const VendorPage: React.FC<Props> = (props) => {
    
    const router = useRouter();
    const {vendorID} = useLocalSearchParams();
    const [vendorInfo, setVendorInfo] = useState<VendorInfo>();
    const [specials, setSpecials] = useState("");
    const [photoURIs, setPhotoURIs] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      getVendorInfo(vendorID, setVendorInfo); 
    }, [])

    useEffect(() => {
      let res = ""
      for (let i = 0; i < vendorInfo?.specialties.length; i++) {
          if (i == vendorInfo?.specialties.length - 1) {
              res += vendorInfo?.specialties[i]
          } else {
              res += vendorInfo?.specialties[i] + " • "
          }
      }
      setSpecials(res)
    }, [vendorInfo])

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


            <View>
              <Text style={[appStyles.header, {fontSize: 25}]}>Reviews</Text>
            </View>


            {
              reviews.map((review) => {
                return (
                  <VendorReviewItem key={review.key}/>)
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

    image: {
      width: 350, 
      height: 225, 
      borderRadius: 10,
      marginTop: 10
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