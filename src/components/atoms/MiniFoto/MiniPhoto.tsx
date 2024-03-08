import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useWindowDimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import NavigationProps from '../../../navigation/NavigationTypes';

interface MiniPhotoProps {
    uri: string
}

const MiniPhoto: React.FC<MiniPhotoProps> = ({ uri }) => {

    const navigation = useNavigation<NavigationProps>();

    const dimensions = useWindowDimensions();
    const sizeImage = dimensions.width * 0.33;

    return (
        <TouchableOpacity onPress={() => navigation.navigate('BigPhoto', { uri })}>
            <View style={[styles.container]}>
                <Image
                    style={[styles.image, { width: sizeImage, height: sizeImage }]} // Применяем вычисленную ширину изображения
                    source={{ uri }}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {

    },
    image: {
        resizeMode: 'contain', // Режим масштабирования, чтобы сохранить соотношение сторон
    },
});

export default MiniPhoto;
