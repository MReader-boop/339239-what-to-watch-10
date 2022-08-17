
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
      {films.map(({card}, i) => {
        const key = `${i} - ${card.name}`;
        return (
          <FilmCard
            onMouseEnter={()=>{setActiveFilmPreview(key);}}
            onMouseLeave={()=>{setActiveFilmPreview('');}}
            videoPreview={card.videoPreview}
            posterPreview={card.posterPreview}
            name={card.name}
            key={key}
          />
        );
      })}
    </div>
  );
}

export default FilmList;
