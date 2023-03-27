import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput, 
  TouchableOpacity, 
  useColorScheme,
  View,
} from 'react-native';

// import { Auth } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';
import AlertItem from '../../assets/components/alertItem';
import appStyles from '../../assets/appStyles';


export type Props = {

}

const Chat:React.FC<Props> = ({

}) => {
    return (
        <View>
            <Text>
                New
            </Text>
        </View>
    )
}

export default Chat; 