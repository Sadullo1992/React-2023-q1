import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import formReducer from './formSlice';
import searchReducer from './searchSlice';
import { apiSlice } from './apiSlice';

const rootReducer = combineReducers({
  form: formReducer,
  search: searchReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});
export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(apiSlice.middleware),
    preloadedState,
  });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
