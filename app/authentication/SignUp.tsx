import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';
import { useRouter, useNavigation } from 'expo-router';
import { TextInput } from 'react-native-gesture-handler';


import { Auth } from 'aws-amplify';
import baseStyle from '../../assets/baseStyles';
// import Text from '../../styles/fonts/Text';

export default function SignUp() {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [name, setName] = useState(''); 
    const [familyName, setFamilyName] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [error, setError] = useState(false); 
    const navigation = useNavigation();
    const router = useRouter(); 

    function routeToConfirm() {
        const dynamicRoute = {
            pathname: "authentication/Confirm", 
            params: {username: email}
        }
        router.push(dynamicRoute)
    }

    async function signUp(email: string, password: string) {
        try {
            console.log(email, password)
            const username = email; 
            const { user } = await Auth.signUp({
                username, 
                password,
                attributes: {
                    name: name, 
                    family_name: familyName
                }
            });
            routeToConfirm();  // route the user to the confirm page
            console.log(user);
            console.log("Successfully signed up, waiting on email confirmation...")
            // navigation.navigate('Confirm', {username: email})
        } catch (e:any) {
            switch(e.message) {
                case 'Password did not conform with policy: Password not long enough': 
                setErrorMsg(e.message)
            }

            // to be continued
            console.log('error signing up:', e);
            setError(true);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Register
            </Text>
            <View style={styles.inputView}>
                <TextInput 
                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c" 
                    autoComplete='email'
                    onChangeText={(email) => setEmail(email)}/>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="First Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={(password) => setName(password)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Last Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={(password) => setFamilyName(password)}
                />
            </View>

            <TouchableOpacity>
                <Text style={baseStyle.smallTextAuth} onPress={() => router.replace("authentication/SignIn")}>Already a user? Login.</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress={() => signUp(email, password)}>
                <Text style={baseStyle.smallTextAuthButton}>Continue</Text>
            </TouchableOpacity>

            {error && <TouchableOpacity>
                <Text style={styles.errorMsg}>{errorMsg}</Text>
            </TouchableOpacity>}


        </View>    
    ); 
}; 


const styles = StyleSheet.create({
    inputView: {
        backgroundColor: "#d9d9d9",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        borderWidth: 2
        // alignItems: "center",
      },

      Header: {
        paddingBottom: 60, 
        fontSize: 30
      }, 

      title: {
        fontSize: 36,
        margin: 20, 
        fontWeight: "bold",
      },
      
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 10, 
        color: "#000"
      }, 
      errorMsg: {
        color: 'red'
      }, 
      container: {
        flex: 1,
        // backgroundColor: "#887676",
        alignItems: 'center',
        justifyContent: 'center',
       },
       forgot_button: {
        height: 30,
        marginBottom: 10,
      }, 
       signedin_button: {
        marginTop: 20, 
       }, 
      loginBtn: {
        width:"70%",
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

