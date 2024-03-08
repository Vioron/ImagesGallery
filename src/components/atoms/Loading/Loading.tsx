import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useAppDispatch } from '../../../redux/store';

const Loading: React.FC = () => {
    return (
        <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="grey" />
    </View>
    );
};

const styles = StyleSheet.create({
    loadingContainer: {
        alignItems: 'center',
        paddingVertical: 10,
    },
});

export default Loading;
