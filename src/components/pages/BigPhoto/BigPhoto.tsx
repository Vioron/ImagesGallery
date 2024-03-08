import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useWindowDimensions } from 'react-native';
import { RouteProp } from '@react-navigation/native';

import { useNavigation } from "@react-navigation/native";
import NavigationProps from '../../../navigation/NavigationTypes';

interface RouteParams {
    uri: string;
}

interface BigPhotoProps {
    route: RouteProp<{ BigPhoto: RouteParams }, 'BigPhoto'>;
}

const BigPhoto: React.FC<BigPhotoProps> = ({ route }) => {
    const { uri } = route.params;
    const navigation = useNavigation<NavigationProps>();
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri }}
                />
            </View>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    container: {
  
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});

export default BigPhoto;
