import {isDataLoading,
  loadFilms,
  loadCurrentFilm,
  setAuthStatus,
  setError,
  loadSimilarFilms,
  loadPromoFilm,
  loadFavorites,
  changeFilmFavoriteStatus,
  loadReviews} from '../store/action';
import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import { UserData } from '../types/user-data';
import { AuthData } from '../types/auth-data';
import {APIRoute, AuthStatus, TIMEOUT_SHOW_ERROR} from '../const';
import { Film } from '../types/film';
import { saveToken, dropToken } from './token';
import {store} from '../store';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(isDataLoading(true));
    const {data} = await api.get<Film[]>(APIRoute.Films);
    dispatch(loadFilms(data));
    dispatch(isDataLoading(false));
  },
);

export const fetchCurrentFilmAction = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchCurrentFilm',
  async (filmId, {dispatch, extra: api}) => {
    dispatch(isDataLoading(true));
    const {data} = await api.get<Film>(`${APIRoute.Films}/${filmId}`);
    dispatch(loadCurrentFilm(data));
    dispatch(isDataLoading(false));
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchSimilarFilms',
  async (filmId, {dispatch, extra: api}) => {
    dispatch(isDataLoading(true));
    const {data} = await api.get<Film[]>(`${APIRoute.Films}/${filmId}/similar`);
    dispatch(loadSimilarFilms(data));
    dispatch(isDataLoading(false));
  },
);

export const fetchPromoFilmAction = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(isDataLoading(true));
    const {data} = await api.get<Film>(APIRoute.Promo);
    dispatch(loadPromoFilm(data));
    dispatch(isDataLoading(false));
  },
);

export const fetchFavoritesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFavorites',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(isDataLoading(true));
    const {data} = await api.get<Film[]>(APIRoute.Favorite);
    dispatch(loadFavorites(data));
    dispatch(isDataLoading(false));
  },
);

export const fetchReviewsAction = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchReviews',
  async (filmId, {dispatch, extra: api}) => {
    dispatch(isDataLoading(true));
    const {data} = await api.get<Film[]>(`${APIRoute.Comments}/${filmId}`);
    dispatch(loadReviews(data));
    dispatch(isDataLoading(false));
  },
);

export const changeFilmFavoriteStatusAction = createAsyncThunk<void, Film, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/changeFilmFavoriteStatusAction',
  async ({id, isFavorite}, {dispatch, extra: api}) => {
    dispatch(isDataLoading(true));
    const {data} = await api.post<Film>(`${APIRoute.Favorite}/${id}/${!isFavorite ? '1' : '0'}`);
    dispatch(changeFilmFavoriteStatus(data));
    dispatch(isDataLoading(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(setAuthStatus(AuthStatus.Authed));
    } catch {
      dispatch(setAuthStatus(AuthStatus.NotAuthed));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      dispatch(setAuthStatus(AuthStatus.Authed));
    } catch (error) {
      dispatch(setError(error));
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthStatus(AuthStatus.NotAuthed));
  },
);

export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
