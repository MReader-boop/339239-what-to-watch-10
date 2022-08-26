import { createAction } from '@reduxjs/toolkit';

export const changeFilter = createAction('films/changeFilter', (filter) => ({
  payload: filter
})
);

export const filterFilms = createAction('films/getFilms');

export const loadFilms = createAction('films/loadFilms');
