import MainScreen from '../../pages/main-page/main';

type AppMainProps = {
    avaibleOffers: number;
    favoriteOffers: number;
}

function App ({avaibleOffers, favoriteOffers}: AppMainProps): JSX.Element {
  return (
    <MainScreen
      avaibleOffers={avaibleOffers}
      favoriteOffers={favoriteOffers}
    />
  );
}


export default App;
