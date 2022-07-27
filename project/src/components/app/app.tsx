import HomeScreen from '../../pages/home-screen';

type AppProps = {
  selectedFilmInfo: {
    imgSrc: string;
    bgImgSrc: string;
    name: string;
    genre: string;
    date: number;
  }
}

function App({selectedFilmInfo}: AppProps): JSX.Element {
  return <HomeScreen selectedFilmInfo = {selectedFilmInfo}/>;
}

export default App;
