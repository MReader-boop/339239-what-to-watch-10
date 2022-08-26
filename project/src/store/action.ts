import { createAction } from '@reduxjs/toolkit';

export const changeCurrentFilter = createAction('films/changeCurrentFilter', (filter) => ({
  payload: filter
})
);

export const changeFilterList = createAction('films/changeFilterList', (filters) => ({
  payload: filters
})
);

export const loadFilms = createAction('films/loadFilms');
