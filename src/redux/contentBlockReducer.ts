import { createSlice, Dispatch, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';

const ACCESS_KEY: string = 'zjo_sRKRPwBEl0DALG-iRoz6frlhPrBLZJMmvNLOMsU'

const fetchPhotos = async () => {
    const url = `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}&count=30`;

    const requestPromise = axios.get(url);

    const timeoutPromise = new Promise<AxiosResponse>((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Request timeout'));
        }, 10000);
    });

    try {
        const response: AxiosResponse = await Promise.race([requestPromise, timeoutPromise]);

        // Теперь мы уверены, что response имеет тип AxiosResponse
        const data = response.data;
        const regularUrls: string[] = data.map((item: any) => item.urls.regular);
        return regularUrls;
    } catch (error) {
        throw error;
    }
};


export const loadingPhotos = createAsyncThunk(
    'loadingPhotos',
    async () => {
        return fetchPhotos();
    }
);

export const updatePhotos = createAsyncThunk(
    'updatePhotos',
    async () => {
        return fetchPhotos();
    }
);

export const addPhotos = createAsyncThunk(
    'addPhotos',
    async () => {
        return fetchPhotos();
    }
);



export interface contentBlockInterface {
    regularUrls: string[]
    status: {
        loading: boolean
        update: boolean
        add: boolean
        error: boolean
    }
}

const initialState: contentBlockInterface = {
    regularUrls: [],
    status: {
        loading: true,
        update: false,
        add: false,
        error: false,
    }
}

export const ContentBlockSlice = createSlice({
    name: 'contentBlock',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(updatePhotos.pending, (state) => {
                state.status.update = true;
            })
            .addCase(updatePhotos.fulfilled, (state, action) => {
                state.regularUrls = action.payload
                state.status.update = false;
            })
            .addCase(updatePhotos.rejected, (state, action) => {
                state.status.update = false;
            })
            .addCase(addPhotos.pending, (state) => {
                state.status.add = true;
            })
            .addCase(addPhotos.fulfilled, (state, action) => {
                console.log(action.payload)
                state.regularUrls.push(...action.payload)
                console.log(state.regularUrls);
                state.status.add = false;
            })
            .addCase(addPhotos.rejected, (state, action) => {
                state.status.add = false;
            })
            .addCase(loadingPhotos.pending, (state) => {
                state.status.error = false
            })
            .addCase(loadingPhotos.fulfilled, (state, action) => {
                state.regularUrls = action.payload
                state.status.loading = false;
            })
            .addCase(loadingPhotos.rejected, (state, action) => {
                state.status.loading = false;
                state.status.error = true

                
            })
    }
})


// Action creators are generated for each case reducer function
export const { } = ContentBlockSlice.actions

export default ContentBlockSlice.reducer