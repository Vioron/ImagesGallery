import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useWindowDimensions } from 'react-native';

import MiniPhoto from '../../atoms/MiniFoto/MiniPhoto';


interface ListMiniPhotoProps {
    regularUrls: string[],
}

const ListMiniPhoto: React.FC<ListMiniPhotoProps> = ({ regularUrls }) => {
    return (
        <View style={styles.container}>
            {regularUrls.map((uriMiniPhotos: string, index: number) => (
                <MiniPhoto key={index} uri={uriMiniPhotos} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    image: {
        resizeMode: 'contain',
    },
});

export default ListMiniPhoto;
