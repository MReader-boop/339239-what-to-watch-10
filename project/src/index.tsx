import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const selectedFilm = {
  imgSrc: 'img/the-grand-budapest-hotel-poster.jpg',
  bgImgSrc: 'img/bg-the-grand-budapest-hotel.jpg',
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  date: 2014
};

const filmCards = [{
  imgSrc: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  name: 'Fantastic Beasts: The Crimes of Grindelwald',
},
{
  imgSrc: 'img/bohemian-rhapsody.jpg',
  name: 'Bohemian Rhapsody'
},
{
  imgSrc: 'img/macbeth.jpg',
  name: 'Macbeth'
},
{
  imgSrc: 'img/aviator.jpg',
  name: 'Aviator'
},
{
  imgSrc: 'img/we-need-to-talk-about-kevin.jpg',
  name: 'We need to talk about Kevin'
},
{
  imgSrc: 'img/what-we-do-in-the-shadows.jpg',
  name: 'What We Do in the Shadows'
},
{
  imgSrc: 'img/revenant.jpg',
  name: 'Revenant'
},
{
  imgSrc: 'img/johnny-english.jpg',
  name: 'Johnny English'
},
{
  imgSrc: 'img/shutter-island.jpg',
  name: 'Shutter Island'
},
{
  imgSrc: 'img/pulp-fiction.jpg',
  name: 'Pulp Fiction'
},
{
  imgSrc: 'img/no-country-for-old-men.jpg',
  name: 'No Country for Old Men'
},
{
  imgSrc: 'img/snatch.jpg',
  name: 'Snatch'
},
{
  imgSrc: 'img/moonrise-kingdom.jpg',
  name: 'Moonrise Kingdom'
},
{
  imgSrc: 'img/seven-years-in-tibet.jpg',
  name: 'Seven Years in Tibet'
},
{
  imgSrc: 'img/midnight-special.jpg',
  name: 'Midnight Special'
},
{
  imgSrc: 'img/war-of-the-worlds.jpg',
  name: 'War of the Worlds'
},
{
  imgSrc: 'img/dardjeeling-limited.jpg',
  name: 'Dardjeeling Limited'
},
{
  imgSrc: 'img/orlando.jpg',
  name: 'Orlando'
},
{
  imgSrc: 'img/mindhunter.jpg',
  name: 'Mindhunter'
},
{
  imgSrc: 'img/midnight-special.jpg',
  name: 'Midnight Special'
}];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      selectedFilmInfo = {selectedFilm}
      filmCards = {filmCards}
    />
  </React.StrictMode>,
);
