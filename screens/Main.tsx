import React, { FC } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import TopBar from '../components/TopBar';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const Main: FC = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <TopBar />
                <Text style={{ marginTop: 400 }}>Todo App</Text>
            </ScrollView>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: getStatusBarHeight(),
        backgroundColor: 'white'
    }
})

export default Main;