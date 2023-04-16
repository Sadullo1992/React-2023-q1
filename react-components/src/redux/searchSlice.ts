import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from './store';

interface SearchState {
  searchText: string;
  sortBy: string;
  page: number;
}

const initialState: SearchState = {
  searchText: '',
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
        searchText: action.payload,
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
  },
});

export const { addSearchText, setSortBy, goToNextPage, goToPrevPage } = searchSlice.actions;

export const selectSearchText = (state: RootState) => state.search.searchText;
export const selectSortBy = (state: RootState) => state.search.sortBy;
export const selectPage = (state: RootState) => state.search.page;

export default searchSlice.reducer;
