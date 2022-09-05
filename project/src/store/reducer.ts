import { loadFilms,
  changeCurrentFilter,
  changeFilterList,
  isDataLoading,
  setAuthStatus,
  setError,
  loadCurrentFilm,
  loadPromoFilm,
  loadSimilarFilms,
  loadFavorites,
  changeFilmFavoriteStatus,
  loadReviews
} from './action';
import { createReducer } from '@reduxjs/toolkit';
import {Filters, AuthStatus} from '../const';
import {Film} from '../types/film';
import { Review } from '../types/review';

type State = {
  currentFilter: string;
  promoFilm: Film | null;
  currentFilm: Film | null;
  currentFilmReviews: Review[] | [];
  similarFilmsList: Film[] | [];
  filmList: Film[] | [];
  favorites: Film[] | [];
  filterList: string[];
  isDataLoading: boolean;
  authorizationStatus: AuthStatus;
  error: string | null;
};

const initialState: State = {
  currentFilter: Filters.AllGenres,
  filmList: [],
  currentFilm: null,
  currentFilmReviews: [],
  promoFilm: null,
  similarFilmsList: [],
  favorites: [],
  filterList: [Filters.AllGenres],
  isDataLoading: false,
  authorizationStatus: AuthStatus.Unknown,
  error: null
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
      })
      .addCase(setError, (state, action) => {
        state.error = action.payload;
      })
      .addCase(loadCurrentFilm, (state, action) => {
        state.currentFilm = action.payload;
      })
      .addCase(loadPromoFilm, (state, action) => {
        state.promoFilm = action.payload;
      })
      .addCase(loadSimilarFilms, (state, action) => {
        state.similarFilmsList = action.payload;
      })
      .addCase(loadFavorites, (state, action) => {
        state.favorites = action.payload;
      })
      .addCase(changeFilmFavoriteStatus, (state, action) => {
        const filmIndex = state.filmList.findIndex((film) => film.id === action.payload.id);
        state.filmList[filmIndex] = action.payload;
      })
      .addCase(loadReviews, (state, action) => {
        state.currentFilmReviews = action.payload;
      });
  }
);

export {reducer};
