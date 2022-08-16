import {Review} from '../types/review';

type FilmDescription = {
  description: string;
  rating: number;
  votes: number;
  director: string;
  starring: string[];
  poster: string;
  genre: string;
  year: number;
};

type FilmCard = {
  posterPreview: string;
  videoPreview: string;
  name: string;
};

export type Film = {
  card: FilmCard;
  description: FilmDescription;
  reviews: Review[];
};
