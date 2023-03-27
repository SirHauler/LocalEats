import React, { useContext, useState } from "react";
import { Redirect, useNavigation, useRouter } from "expo-router";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native'
import { useFonts } from 'expo-font';
import baseStyle from "../../assets/baseStyles";
import appStyles from "../../assets/appStyles";
import SignUp from "./SignUp";
import { Auth } from 'aws-amplify'; 
import { AuthContext } from "../../util/AuthProvider";

export type Props = {

}

const SignIn:React.FC<Props> = ({

}) => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const authValue = useContext(AuthContext);
  const navigation = useNavigation(); 
  const router = useRouter();
  // console.log("Auth value: " + authValue?.auth)
  async function signIn() {
    try {
        const user = await Auth.signIn(email, password);
        console.log("Here is the user", user); 
        authValue?.setAuth({isLoggedIn: true})
        router.replace("/home/Map")
    } catch (error) {
        // setIsLoggedIn(false);
        // console.log(isLoggedIn)
        console.log('error signing in', error); 
    }
}


  return (
  <View style={baseStyle.container}>
            <Text style={styles.title}>
                Sign In 
            </Text>
            <View style={appStyles.inputView}>
                <TextInput 
                    style={baseStyle.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c" 
                    onChangeText={(email) => setEmail(email)}
                    autoComplete='email'/>
            </View>
            <View style={baseStyle.inputView}>
                <TextInput
                    style={baseStyle.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                    autoComplete='password'
                />
            </View>

            <TouchableOpacity>
                <Text style={[baseStyle.smallTextAuth, {marginTop: 0}]}>Forgot Password</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={baseStyle.loginBtn}
              onPress={() => signIn()}
              >
              
                <Text style={baseStyle.smallTextAuthButton}>Login</Text>
            </TouchableOpacity>


            <TouchableOpacity>
                <Text style={baseStyle.smallTextAuth}
                      onPress={() => router.push("./SignUp")}
                >New? Register.</Text>
            </TouchableOpacity>


        </View>    
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      padding: 24,
    },
    main: {
      flex: 1,
      justifyContent: "center",
      maxWidth: 960,
      marginHorizontal: "auto",
    },
    title: {
      fontSize: 36,
      margin: 20, 
      fontWeight: "bold",
    },
    subtitle: {
      fontSize: 36,
      color: "#38434D",
    },
    findButton: {
      margin: 10, 
      alignItems: 'center'
    }
  });

export default SignIn;