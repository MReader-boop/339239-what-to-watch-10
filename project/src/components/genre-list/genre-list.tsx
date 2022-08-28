import {Filters} from '../../const';
import GenreListItem from '../genre-list-item/genre-list-item';

type GenreListProps = {
  currentFilter: string;
  filterList: string[];
  onChange: () => void;
};

function GenreList({currentFilter, filterList, onChange}: GenreListProps): JSX.Element {
  return(
    <ul className="catalog__genres-list">
      <GenreListItem onClick={() => onChange()} currentFilter={currentFilter} filter={Filters.AllGenres}/>
      {filterList.map((filter, index) => {
        const key = `${filter} - ${index}`;
        return <GenreListItem onClick={() => onChange()} currentFilter={currentFilter} filter={filter} key={key}/>;
      })}
    </ul>
  );
}

export default GenreList;
