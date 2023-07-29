import * as React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export interface SearchBarProps {
}

export function SearchBar (props: SearchBarProps) {
    return (
        <View style={styles.searchBox}>
            <Ionicons name='search-sharp' size={20}/>
            <TextInput placeholder='Search Here' style={styles.searchInput}/>
        </View>
    );
}


const styles = StyleSheet.create({
    searchBox: {
        position: 'absolute', 
        backgroundColor: 'white', 
        alignSelf: 'center', 
        marginTop: 50, 
        padding: 10, 
        borderRadius: 10, 
        width: 300, 
        flexDirection: 'row'
    }, 
    
    searchInput: {
        width: 250, 
        marginLeft: 10
    }
}); 
