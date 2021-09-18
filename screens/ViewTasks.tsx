import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const ViewTasks: FC = () => {
    return (
        <View style={styles.container}>
            <Text>View Tasks</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ViewTasks;