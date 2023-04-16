import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice';
import searchReducer from './searchSlice';
import photosReducer from './photosSlice';
import { apiSlice } from './apiSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
    search: searchReducer,
    photos: photosReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
