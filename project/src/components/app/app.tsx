import {AppRoutes} from '../../const';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeFilterList } from '../../store/action';
import { Filters } from '../../const';
import HomeScreen from '../../pages/home-screen/home-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { Film } from '../../types/film';

const getFilterList = (films: Film[]): string[] => {
  const result: string[] = [];
  films.forEach((film) => {
    if (!result.includes(film.genre)) {
      result.push(film.genre);
    }
  });

  return result;
};

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const films = useAppSelector((state) => state.filmList);
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const filterList = getFilterList(films);
  dispatch(changeFilterList([Filters.AllGenres, ...filterList]));

  return (
    <BrowserRouter>
      <Routes>
        <Route path = {AppRoutes.Main} element={<HomeScreen films = {films} filterList={filterList} />} />
        <Route path = {AppRoutes.SignIn} element = {<SignInScreen />}/>
        <Route path = {AppRoutes.MyList}
          element = {
            <PrivateRoute authStatus = {authStatus} >
              <MyListScreen films={films}/>
            </PrivateRoute>
          }
        />
        <Route path = {AppRoutes.Film} element = {<FilmScreen films={films}/>}/>
        <Route path = {AppRoutes.AddReview} element = {<AddReviewScreen film={films[0]} />}/>
        <Route path = {AppRoutes.Player} element = {<PlayerScreen films={films}/>}/>
        <Route path = '*' element = {<NotFoundScreen />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
