import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect , useContext, useState} from 'react';

import {
    Pressable, 
    Text,
    TextInput, 
    TouchableOpacity, 
    View
  } from 'react-native';



  export type Props = {

  }

  const VendorPage: React.FC<Props> = (props) => {
    
    const router = useRouter();
    const {name, rating} = useLocalSearchParams(); 
    
    return (
        <View>
            <Text style={{paddingTop: 100}}>{name}</Text>
            <Text style={{paddingTop: 100}}>{rating}</Text>

            <Pressable style={{paddingTop: 300}} onPress={() => router.back()}>
               <Text>Go Back!</Text>
            </Pressable>
        </View>
    )
  }

  export default VendorPage;