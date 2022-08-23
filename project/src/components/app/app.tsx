import {AppRoutes, AuthStatus} from '../../const';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import HomeScreen from '../../pages/home-screen/home-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {Film} from '../../types/film';

type AppProps = {
  selectedFilmInfo: {
    imgSrc: string;
    bgImgSrc: string;
    name: string;
    genre: string;
    date: number;
  };
  films: Film[]
}

function App({selectedFilmInfo, films}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = {AppRoutes.Main} element={<HomeScreen selectedFilmInfo = {selectedFilmInfo} films = {films} />} />
        <Route path = {AppRoutes.SignIn} element = {<SignInScreen />}/>
        <Route path = {AppRoutes.MyList}
          element = {
            <PrivateRoute authStatus = {AuthStatus.Authed} >
              <MyListScreen films={films}/>
            </PrivateRoute>
          }
        />
        <Route path = {AppRoutes.Film} element = {<FilmScreen films={films}/>}/>
        <Route path = {AppRoutes.AddReview} element = {<AddReviewScreen film={films[0]} />}/>
        <Route path = {AppRoutes.Player} element = {<PlayerScreen film={films[0]}/>}/>
        <Route path = '*' element = {<NotFoundScreen />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
