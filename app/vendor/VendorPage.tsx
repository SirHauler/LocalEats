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
    ActivityIndicator
  } from 'react-native';


const specialties = [
  "Mexican",
  "Italian",
  "American"
]

import { DataStore, Storage } from 'aws-amplify';
import Ionicons from '@expo/vector-icons/Ionicons';
import appStyles from '../../assets/appStyles';
import { VendorInfo, VendorInfoMetaData } from '../../src/models';


async function getVendorInfo(vendorID: string, setVendorInfo: React.Dispatch<React.SetStateAction<object>>) {
  // get vendorinfo using DataStore
  const vendorInfo = await DataStore.query(VendorInfo, (c) => c.id.eq(vendorID));
  console.log("VendorInfo: " + JSON.stringify(vendorInfo));
  setVendorInfo(vendorInfo[0]);
}

export type Props = {

}

  const VendorPage: React.FC<Props> = (props) => {
    
    const router = useRouter();
    const {vendorID} = useLocalSearchParams();
    const [photos, setPhotos] = useState(null);
    const [photoURI, setPhotoURI] = useState(null);
    const [vendorInfo, setVendorInfo] = useState<VendorInfo>();
    const [specials, setSpecials] = useState("");
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

    function getPhotos() {
      const list_of_photos = Storage.list('vendors/photos/lacentroamericana/', {
        pageSize: 'ALL'
      })
        .then(result => {
          setPhotos(result); 
          const filteredPhotos = result.results.filter((photo) => photo.size > 0);
          Storage.get(filteredPhotos[0].key)
            .then(res => {setPhotoURI(res)
                  console.log(" Photo: " + res)})
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    }

    useEffect(() => {
      getPhotos();
      console.log(vendorInfo?.specialties)
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
            photoURI == null ? (
              <ActivityIndicator size="large" color="#999999" />
            ): (
              
                <Image source={{uri: photoURI}}
                  style={styles.image}
                />
            )
          }

          </View>
          

          
              <View style={{alignItems: 'center', paddingTop: 15,}}>
            
            <Text style={{fontSize: 18}}>{specials}</Text>

          
              </View>


            <View style={styles.googleMapsButtonView}>
              <Pressable style={styles.googleMapsButton}>
                <Text>Google Maps</Text>
              </Pressable>
            </View>


            <View>
              <Text style={[appStyles.header, {fontSize: 25}]}>Reviews</Text>
            </View>

            <Pressable style={{paddingTop: 300}} onPress={() => router.back()}>
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
    }, 

    googleMapsButton: { 
      borderRadius: 20, 
      padding: 10, 
      backgroundColor: '#999999',
      marginTop: 10
    }
  }); 