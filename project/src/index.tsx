import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { films } from './mocks/films';

const selectedFilm = {
  imgSrc: 'img/the-grand-budapest-hotel-poster.jpg',
  bgImgSrc: 'img/bg-the-grand-budapest-hotel.jpg',
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  date: 2014
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      selectedFilmInfo = {selectedFilm}
      films = {films}
    />
  </React.StrictMode>,
);
