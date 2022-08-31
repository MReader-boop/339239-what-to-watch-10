import { loadFilms, changeCurrentFilter, changeFilterList, isDataLoading, setAuthStatus } from './action';
import { createReducer } from '@reduxjs/toolkit';
import {Filters, AuthStatus} from '../const';
import {Film} from '../types/film';

type State = {
  currentFilter: string;
  filmList: Film[] | [];
  filterList: string[];
  isDataLoading: boolean;
  authorizationStatus: AuthStatus;
};

const initialState: State = {
  currentFilter: Filters.AllGenres,
  filmList: [],
  filterList: [Filters.AllGenres],
  isDataLoading: false,
  authorizationStatus: AuthStatus.Unknown,
};

const reducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(loadFilms, (state, action) => {
        state.filmList = action.payload;
      })
      .addCase(changeCurrentFilter, (state, action) => {
        state.currentFilter = action.payload;
      })
      .addCase(changeFilterList, (state, action) => {
        state.filterList = action.payload;
      })
      .addCase(isDataLoading, (state, action) => {
        state.isDataLoading = action.payload;
      })
      .addCase(setAuthStatus, (state, action) => {
        state.authorizationStatus = action.payload;
      });
  }
);

export {reducer};
