import { createAction } from '@reduxjs/toolkit';

export const changeCurrentFilter = createAction('films/changeCurrentFilter', (filter) => ({
  payload: filter
})
);

export const changeFilterList = createAction('films/changeFilterList', (filters) => ({
  payload: filters
})
);

export const loadFilms = createAction('films/loadFilms', (films) => ({
  payload: films
}));

export const loadCurrentFilm = createAction('films/loadCurrentFilm', (currentFilm) => ({
  payload: currentFilm
}));

export const loadPromoFilm = createAction('films/loadPromoFilm', (promoFilm) => ({
  payload: promoFilm
}));

export const loadSimilarFilms = createAction('films/loadSimilarFilms', (similarFilms) => ({
  payload: similarFilms
}));

export const isDataLoading = createAction('films/isDataLoading', (status) => ({
  payload: status
}));

export const setAuthStatus = createAction('user/setAuthStatus', (status) => ({
  payload: status
}));

export const setError = createAction('data/setError', (status) => ({
  payload: status
}));
