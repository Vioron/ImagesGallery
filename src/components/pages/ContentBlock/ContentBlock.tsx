import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ScrollView, StyleSheet, View, ActivityIndicator } from 'react-native';

import ListMiniPhoto from '../../molecules/ListMiniPhotos/ListMiniPhotos';
import ErrorLoading from '../../atoms/ErrorLoading/ErrorLoading';
import Loading from '../../atoms/Loading/Loading';

import { useAppDispatch } from '../../../redux/store';
import { updatePhotos, loadingPhotos, addPhotos } from '../../../redux/contentBlockReducer';
import { RootState } from '../../../redux/store';



const ContentBlock: React.FC = () => {

    const scrollViewRef = useRef<ScrollView>(null);
    const dispatch = useAppDispatch();

    const { regularUrls, status: { update, add, loading, error } } = useSelector((state: RootState) => state.ContentBlock);

    useEffect(() => {
        dispatch(loadingPhotos());
    }, []);

    const handleScroll = (event: any) => {
        const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;

        if (contentOffset.y <= 0 && !loading && !update && !add) {
            dispatch(updatePhotos());
        }

        const isEndReached = contentOffset.y >= contentSize.height - layoutMeasurement.height - 5;
        if (isEndReached && !loading && !update && !add) {
            dispatch(addPhotos());
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollViewRef}
                contentContainerStyle={styles.scrollViewContent}
                onScroll={handleScroll}
                scrollEventThrottle={3}
            >
                {update && (<Loading />)}

                {!error ? <ListMiniPhoto regularUrls={regularUrls} /> : <ErrorLoading />}

                {add && (<Loading />)}


            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ContentBlock;


