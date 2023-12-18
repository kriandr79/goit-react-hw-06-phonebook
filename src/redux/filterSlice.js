import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = { filter: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    makeFilter: {
      reducer(state, action) {
            state.filter = action.payload;
      },
    },
  },
});

export const { makeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;


// Selectors

export const getFilter = state => state.filter.filter;
