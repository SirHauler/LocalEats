// create a tag component
import * as React from 'react'; 
import { Text,
    StyleSheet,
    View,
    Pressable, } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

interface TagProps {
    children: typeof React.Children; 
    index: string, 
    setTags: any, 
    tags: string
}

export default function Tag(TagProps: any) {  

    const removeTag = (key: string) => {
        const newTags = TagProps.tags.filter((tag: any) => tag.key !== TagProps.index);
        TagProps.setTags(newTags); 
    }
    return (
    <View style={styles.tag}>
        <Text>{TagProps.children}</Text>
        <Pressable style={styles.deleteButton} onPress={() => removeTag(TagProps.key)}>
            <Ionicons name="close" size={15} color="black" />
        </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
    tag: {
        backgroundColor: '#f5f5f5',
        borderRadius: 5,
        borderWidth: 1,
        padding: 4, 
        margin: 5,
        flexDirection: "row"
    }, 

    deleteButton: {
        width: 20, 
        marginLeft: 5, 
    }
}) ;