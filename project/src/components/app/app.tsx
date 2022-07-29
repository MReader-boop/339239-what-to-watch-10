import HomeScreen from '../../pages/home-screen/home-screen';

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
    <HomeScreen
      selectedFilmInfo = {selectedFilmInfo}
      filmCards = {filmCards}
    />
  );
}

export default App;
