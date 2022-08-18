
import {Film} from '../../types/film';
import FilmCard from '../film-card/film-card';
import {useState} from 'react';

type FilmListProps = {
  films: Film[];
};

function FilmList({films}: FilmListProps): JSX.Element {
  const [, setActiveFilmPreview] = useState('');
  return (
    <div className="catalog__films-list">
      {films.map((film) => {
        const key = `${film.id} - ${film.name}`;
        return (
          <FilmCard
            onMouseEnter={()=>{setActiveFilmPreview(key);}}
            onMouseLeave={()=>{setActiveFilmPreview('');}}
            videoPreview={film.card.videoPreview}
            posterPreview={film.card.posterPreview}
            name={film.name}
            id={film.id}
            key={key}
          />
        );
      })}
    </div>
  );
}

export default FilmList;
