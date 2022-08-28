import {Film} from '../../types/film';
import FilmCard from '../film-card/film-card';
import {useState} from 'react';

type FilmListProps = {
  films: Film[];
};

function FilmList({films}: FilmListProps): JSX.Element {
  const [activeFilmId, setActiveFilmId] = useState('');
  return (
    <div className="catalog__films-list">
      {films.map((film) => {
        const key = `${film.id} - ${film.name}`;
        return (
          <FilmCard
            onMouseEnter={()=>{setActiveFilmId(film.id);}}
            onMouseLeave={()=>{setActiveFilmId('');}}
            isActive={activeFilmId === film.id}
            film={film}
            key={key}
          />
        );
      })}
    </div>
  );
}

export default FilmList;
