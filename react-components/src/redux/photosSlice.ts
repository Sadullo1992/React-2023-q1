import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchResponse } from '../types/search-response.model';
import { RootState } from './store';

const initialState: SearchResponse = {
  total: 0,
  total_pages: 0,
  results: [],
};

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    addPhotos: (state, action: PayloadAction<SearchResponse>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { addPhotos } = photosSlice.actions;

export const selectPhotosData = (state: RootState) => state.photos;

export default photosSlice.reducer;
