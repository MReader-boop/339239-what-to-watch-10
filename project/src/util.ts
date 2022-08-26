import { Film } from './types/film';

export const Filters = {
  AllGenres: (films: Film[]): Film[] => (films),
  Comedies: (films: Film[]): Film[] => (films.filter((film) => film.description.genre === 'comedy')),
  Crime: (films: Film[]): Film[] => (films.filter((film) => film.description.genre === 'crime')),
  Documentary: (films: Film[]): Film[] => (films.filter((film) => film.description.genre === 'documentary')),
  Dramas:(films: Film[]): Film[] => (films.filter((film) => film.description.genre === 'drama')),
  Horror: (films: Film[]): Film[] => (films.filter((film) => film.description.genre === 'horror')),
  KidsAndFamily: (films: Film[]): Film[] => (films.filter((film) => film.description.genre === 'kids-and-family')),
  Romance: (films: Film[]): Film[] => (films.filter((film) => film.description.genre === 'romance')),
  SciFi: (films: Film[]): Film[] => (films.filter((film) => film.description.genre === 'sci-fi')),
  Thrillers: (films: Film[]): Film[] => (films.filter((film) => film.description.genre === 'thriller')),
};
