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
};

export type Film = {
  id: number;
  name: string;
  card: FilmCard;
  description: FilmDescription;
  reviews: Review[];
};
