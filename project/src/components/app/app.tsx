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

type AppProps = {
  selectedFilmInfo: {
    imgSrc: string;
    bgImgSrc: string;
    name: string;
    genre: string;
    date: number;
  };
  filmCards: {
    imgSrc: string;
    name: string;
  }[]
}

function App({selectedFilmInfo, filmCards}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = {AppRoutes.Main} element={
          <HomeScreen
            selectedFilmInfo = {selectedFilmInfo}
            filmCards = {filmCards}
          />
        }
        />
        <Route path = {AppRoutes.SignIn} element = {<SignInScreen />}/>
        <Route path = {AppRoutes.MyList} element = {
          <PrivateRoute
            authStatus = {AuthStatus.NotAuthed}
          >
            <MyListScreen />
          </PrivateRoute>
        }
        />
        <Route path = {AppRoutes.Film} element = {<FilmScreen />}/>
        <Route path = {AppRoutes.AddReview} element = {<AddReviewScreen />}/>
        <Route path = {AppRoutes.Player} element = {<PlayerScreen />}/>
        <Route path = '*' element = {<NotFoundScreen />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
