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

import { Auth } from 'aws-amplify';
import baseStyle from '../../assets/baseStyles';
import { useNavigation, useSearchParams, useRouter } from 'expo-router/src/';


export type Props = {
    username: string
}

const Confirm: React.FC<Props> = ({
}) => {
    const [code, setCode] = useState(''); 
    // console.log(route.params.username)
    const {username} = useSearchParams();
    const navigation = useNavigation(); 
    const router = useRouter();
    async function confirmSignUp() {
        try {
          await Auth.confirmSignUp(String(username), code);
          console.log("This is the username: " + username)
          //Assuming all goes well you will end up here
          router.replace("authentication/SignIn")
        //   navigation.navigate("SignIn")
        } catch (error) {
            console.log('error confirming sign up', error);
        }
    }

    return (
        <View style={baseStyle.container}>
            <Text style={baseStyle.Header}>
                Confirm
            </Text>
            <View style={baseStyle.inputView}>
                <TextInput 
                    style={styles.TextInput}
                    placeholder="Code"
                    placeholderTextColor="#003f5c" 
                    onChangeText={(code) => setCode(code)}
                    keyboardType='number-pad'
                    autoFocus={true}
                    maxLength={6}/>
            </View>
            <TouchableOpacity>
                <Text style={[baseStyle.smallTextAuth, {marginTop: 0}]}>Resend Code?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress={() => confirmSignUp()}>
                <Text style={baseStyle.smallTextAuthButton}>Register</Text>
            </TouchableOpacity>
            
        </View>  
        
    )
}

const styles = StyleSheet.create({
    inputView: {
        backgroundColor: "#d9d9d9",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        // alignItems: "center",
      },

      Header: {
        paddingBottom: 60, 
        fontSize: 30
      }, 
      
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 10, 
        color: "#000"
      }, 
      container: {
        flex: 1,
        backgroundColor: "#d9d9d9",
        alignItems: 'center',
        justifyContent: 'center',
       },
       forgot_button: {
        height: 30,
        marginBottom: 30,
      }, 
      loginBtn: {
        width:"80%",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        backgroundColor:"#a6a6a6",
       }, 
       loginText: {
        fontSize: 15
       }

})

export default Confirm; 