import { StyleSheet } from "react-native";

const baseStyle = StyleSheet.create({
    container: {
        flex: 1,
        // color can be changed here
        alignItems: 'center',
        justifyContent: 'center', 
        height: '100%'
       },
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
        fontSize: 40, 
        color: 'black', 
        // fontFamily: 'Comfortaa-Regular'
      }, 
      
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 10, 
        color: "#000"
      }, 
       forgot_button: {
        height: 30,
        marginBottom: 10,
      }, 

      smallTextAuth: {
        marginTop: 20, 
        color: 'black'
       }, 
       smallTextAuthButton: {
        fontSize: 15, 
        color: 'black'
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
       
       landingButtons: {
        marginHorizontal: 15, 
        marginBottom: 20, 
        width: 160, 
        height: 61, 
        backgroundColor: "#fff", 
        borderRadius: 10, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
       }, 
       landingButtonRegister: {
        backgroundColor: '#000', 
       }, 
       landingButtonRegisterText: {
        color: 'white'
       }, 
       landingButtonText: {
        fontSize: 15, 
        color: 'black'
       }

})

export default baseStyle; 