import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';


const TopBar = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputBar}
                placeholder='Add a Task'
                placeholderTextColor='grey'
            />
            <TouchableOpacity style={styles.button}>
                <Feather name='plus' size={25} color={'gray'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewAll} onPress={() => navigation.navigate('ViewTasks')}>
                <Text style={{ fontWeight: 'bold', fontSize: 12, color: 'white' }}>View Tasks</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 75,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.12,
        shadowRadius: 5.46,
        elevation: 9
    },
    inputBar: {
        borderWidth: 1,
        borderColor: 'lightgrey',
        marginLeft: 30,
        height: 40,
        width: 200,
        borderRadius: 10,
        padding: 7,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    button: {
        width: 55,
        height: 40,
        marginRight: 90,
        backgroundColor: 'white',
        borderColor: 'gray',
        padding: 0,
        borderTopRightRadius: 20,
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.15,
        shadowRadius: 6.46,
        elevation: 9,
    },
    viewAll: {
        width: 70,
        backgroundColor: 'dodgerblue',
        height: 40,
        right: 75,
        backgroundColor: 'dodgerblue',
        borderColor: 'gray',
        padding: 0,
        borderRadius: 10,
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.15,
        shadowRadius: 6.46,
        elevation: 9,
    }
})


export default TopBar;