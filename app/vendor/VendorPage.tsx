import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect , useContext, useState} from 'react';

import {
    Pressable, 
    SafeAreaView, 
    ScrollView, 
    Text,
    TextInput, 
    TouchableOpacity, 
    View
  } from 'react-native';
import appStyles from '../../assets/appStyles';

  export type Props = {

  }

  const VendorPage: React.FC<Props> = (props) => {
    
    const router = useRouter();
    const {name, rating} = useLocalSearchParams(); 
    
    return (

      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <View style={appStyles.container}>

          <Text style={appStyles.header}>{name}</Text>
            <Text style={{paddingTop: 100}}>{rating}</Text>

            <Pressable style={{paddingTop: 300}} onPress={() => router.back()}>
               <Text>Go Back!</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }

  export default VendorPage;