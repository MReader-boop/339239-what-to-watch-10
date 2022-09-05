import {Film} from '../../types/film';
import FilmCard from '../film-card/film-card';
import {useState} from 'react';

type FilmListProps = {
  films: Film[];
};

function FilmList({films}: FilmListProps): JSX.Element | null {
  const [activeFilmId, setActiveFilmId] = useState<number | null>();

  if(films.length === 0) {
    return null;
  }

  return (
    <div className="catalog__films-list">
      {films.map((film) => {
        const key = `${film.id} - ${film.name}`;
        return (
          <FilmCard
            onMouseEnter={()=>{setActiveFilmId(film.id);}}
            onMouseLeave={()=>{setActiveFilmId(null);}}
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
