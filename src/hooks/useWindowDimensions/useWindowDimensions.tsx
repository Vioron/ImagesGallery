import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

// Кастомный хук для получения размеров окна
const useWindowDimensions = () => {
    const [dimensions, setDimensions] = useState(Dimensions.get('window'));

    useEffect(() => {
        const updateDimensions = () => {
            setDimensions(Dimensions.get('window'));
        };

        Dimensions.addEventListener('change', updateDimensions);
    }, []);

    return dimensions;
};