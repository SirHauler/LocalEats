import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, TextInput, TouchableOpacity, FlatList, Pressable } from 'react-native';
import appStyles from '../../assets/appStyles';
import baseStyle from '../../assets/baseStyles';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import Tag from '../../util/Tag';

interface CreateBusinessFormProps {
    
}

const CreateBusinessForm = (props: CreateBusinessFormProps) => {
  
  const router = useRouter(); 

  const [specialties, setSpecialties] = useState([]); 

  const [special, setSpecial] = useState("Pupusas");
  const [address, setAddress] = useState("123 Main St");

  const addElement = () => {
    if (special !== "") {
      setSpecialties([...specialties, {key: special}]);
      setSpecial(""); // reset 
    }
  }
  
  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={appStyles.header}> Create Business Form </Text>
          <View style={styles.inputView}>
                <TextInput 
                    style={styles.TextInput}
                    placeholder="Name of Business"
                    placeholderTextColor="#003f5c" 
                    autoComplete='email'
                    onChangeText={() => {}}/>
            </View>


            <View style={{width: "70%", marginBottom: 20}}>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>

                <View style={styles.specialtiesInputView}>
                    <TextInput
                        style={styles.specialtiesInputText}
                        placeholder="Specialties"
                        placeholderTextColor="#003f5c"
                        value={special}
                        onChangeText={(special) => {setSpecial(special)}}
                    />
                </View>

                <Pressable style={styles.specialtiesAddButton} onPress={() => {addElement()}}>
                    <Text style={baseStyle.smallTextAuthButton}>Add</Text>
                </Pressable>
              </View>

              <View style={[styles.tagView]}>
                {specialties.map((item, index) => (
                  <Tag key={index}
                    index={item.key}
                    setTags={setSpecialties}
                    tags={specialties}>{item.key}</Tag>
                  ))}
              </View>

            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Address"
                    placeholderTextColor="#003f5c"
                    onChangeText={(address) => {setAddress(address)}}
                    value={address}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Last Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={() => {}}
                />
            </View>

            <TouchableOpacity>
                <Text style={baseStyle.smallTextAuth} onPress={() => router.back()}>Back</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress={() => {}}>
                <Text style={baseStyle.smallTextAuthButton}>Continue</Text>
            </TouchableOpacity>
          
        </View>
    </SafeAreaView>
  );
};

export default CreateBusinessForm;


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

    specialtiesInputView: {
      width: "45%", 
      marginRight: "5%", 
      borderRadius: 30,
      borderWidth: 2,
      height: 45,
      backgroundColor: "#d9d9d9",
      alignItems: "center", 
      justifyContent: "center",
    }, 

    specialtiesAddButton: {
      width: "30%",
      borderRadius: 30,
      borderWidth: 2,
      alignItems: 'center', 
      justifyContent: 'center',
    }, 

    specialtiesInputText: {
      // width: "100%",
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
      // flex: 1,
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
      marginTop:10,
      backgroundColor:"#a6a6a6",
     }, 
     loginText: {
      fontSize: 15
     }, 

     tagView: {
      flexDirection: "row",
      flexWrap:"wrap"
     }

})

