
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
            film={film}
            key={key}
          />
        );
      })}
    </div>
  );
}

export default FilmList;
