
import {useAppDispatch} from '../../hooks';
import {changeCurrentFilter} from '../../store/action';

type GenreListItemProps = {
  currentFilter: string;
  filter: string;
  onClick: () => void;
};

function GenreListItem({currentFilter, filter, onClick}: GenreListItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  return(
    <li className={`catalog__genres-item ${filter === currentFilter ? 'catalog__genres-item--active' : ''}`}>
      <a onClick={
        (evt: React.MouseEvent<HTMLElement>) => {
          evt.preventDefault();
          dispatch(changeCurrentFilter(filter));
          onClick();
        }
      } href="/" className="catalog__genres-link"
      >
        {filter}
      </a>
    </li>
  );
}

export default GenreListItem;
