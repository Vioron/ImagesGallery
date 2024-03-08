import { configureStore } from '@reduxjs/toolkit'
import ContentBlockreducer from './contentBlockReducer';
import { useDispatch } from "react-redux";



export const store = configureStore({
  reducer: {
    ContentBlock: ContentBlockreducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch