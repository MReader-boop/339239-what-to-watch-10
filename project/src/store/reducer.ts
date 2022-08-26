import { changeFilter, filterFilms, loadFilms } from './action';
import { Filters } from '../util';
import { createReducer } from '@reduxjs/toolkit';
import { films } from '../mocks/films';

const initialState = {
  currentFilter: Filters.AllGenres,
  filmList: films,
  filteredFilmList: films,
};

const reducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(changeFilter, (state, action) => {
        state.currentFilter = action.payload;
      })
      .addCase(filterFilms, (state) => {
        state.filteredFilmList = state.currentFilter(state.filmList);
      })
      .addCase(loadFilms, (state) => {
        state.filmList = films;
      });
  }
);

export {reducer};
