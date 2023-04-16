import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from './store';

interface SearchState {
  query: string;
  sortBy: string;
  page: number;
}

const initialState: SearchState = {
  query: '',
  sortBy: 'relevant',
  page: 1,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addSearchText: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        query: action.payload,
      };
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        sortBy: action.payload,
      };
    },
    goToNextPage: (state) => {
      return {
        ...state,
        page: state.page + 1,
      };
    },
    goToPrevPage: (state) => {
      return {
        ...state,
        page: state.page - 1,
      };
    },
    resetPage: (state) => {
      return {
        ...state,
        page: 1,
      };
    },
  },
});

export const { addSearchText, setSortBy, goToNextPage, goToPrevPage, resetPage } =
  searchSlice.actions;

export const selectSearchText = (state: RootState) => state.search.query;
export const selectSortBy = (state: RootState) => state.search.sortBy;
export const selectPage = (state: RootState) => state.search.page;
export const selectSearchObj = (state: RootState) => state.search;

export default searchSlice.reducer;
