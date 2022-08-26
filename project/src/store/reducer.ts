import { changeFilter } from './action';
import { Filters } from '../const';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  currentFilter: Filters.AllGenres,
};

const reducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(changeFilter, (state, action) => {
        state.currentFilter = action.payload;
      });
  }
);

export {reducer};
