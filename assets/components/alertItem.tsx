import { 
    TouchableOpacity, 
    Text, 
    View, 
    StyleSheet
 } from "react-native"; 

// import ComfortaaText from "../../styles/fonts/ComfortaaText";

export type Props = {
    title: string,
    subText: string
}


const AlertItem:React.FC<Props> =  ({
    title, 
    subText,
    }) => {
    return (
        <TouchableOpacity style={styles.alertBox}>
            <Text style={styles.alertText}>{title}</Text>
            <Text style={[styles.alertSubText, {marginTop: 5}]}>{subText}</Text>
        </TouchableOpacity>                    
    )
}

const styles = StyleSheet.create({
    alertBox: {
        height: 60, 
        backgroundColor: 'white', 
        borderRadius: 5, 
        margin: 10, 
        justifyContent: 'center'
    }, 
    alertText: {
        textAlign: 'center', 
        color: 'grey' 
    }, 
    alertSubText: {
        textAlign: 'center'
    }
})

export default AlertItem; 