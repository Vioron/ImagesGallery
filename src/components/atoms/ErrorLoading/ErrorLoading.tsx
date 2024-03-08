import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { loadingPhotos } from '../../../redux/contentBlockReducer';
import { useAppDispatch } from '../../../redux/store';

const ErrorLoading: React.FC = () => {
    const dispatch = useAppDispatch();

    return (
        <TouchableOpacity onPress={() => dispatch(loadingPhotos())}>
            <View style={styles.container}>
                <Text style={styles.text}>Что-то пошло не так, нажмите на меня для повторной попытки</Text>
            </View>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'black', 
        fontSize: 18, 
        textAlign: 'center',
    },
});

export default ErrorLoading;
