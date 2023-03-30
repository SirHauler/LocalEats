import { StyleSheet } from "react-native";

const appStyles = StyleSheet.create({
    // ...
    container: {
      justifyContent: "space-between",
      // padding: 5,
      margin: 10
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
    
    recentLocationView: {
      flex: .3, 
      minHeight: 400, 
      borderWidth: 2, 
      backgroundColor: 'white',
      marginBottom: 10,
      borderRadius: 10
    }, 
    locationView: {
      flex: .3, 
      backgroundColor: 'white',
      marginBottom: 10, 
    //   backgroundColor: "#D9D9D9", 
      borderWidth: 2, 
      width: '100%', 
      borderRadius: 10
    }, 
    header: {
      // textAlign: 'center', 
      fontSize: 30, 
      margin: 10
    }, 
    fullView: {
      // backgroundColor: "#887676"
    }, 
    addressView: {
      alignItems: 'center'
    }, 
    safeAreaView: {
      height: '100%'
    }
  });


export default appStyles;
