import { loadFilms, changeCurrentFilter, changeFilterList } from './action';
import { createReducer } from '@reduxjs/toolkit';
import { films } from '../mocks/films';
import {Filters} from '../const';
import {Film} from '../types/film';

type State = {
  currentFilter: string;
  filmList: Film[] | [];
  filterList: string[];
};

const initialState: State = {
  currentFilter: Filters.AllGenres,
  filmList: films,
  filterList: [Filters.AllGenres],
};

const reducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(loadFilms, (state) => {
        state.filmList = films;
      })
      .addCase(changeCurrentFilter, (state, action) => {
        state.currentFilter = action.payload;
      })
      .addCase(changeFilterList, (state, action) => {
        state.filterList = action.payload;
      });
  }
);

export {reducer};
