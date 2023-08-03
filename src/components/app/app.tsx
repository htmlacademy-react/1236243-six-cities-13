import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AutorizationStatus } from '../../const';
import MainScreen from '../../pages/main-page/main';
import FavoritesScreen from '../../pages/favorite-page/favorites';
import LoginScreen from '../../pages/login-page/login-screen';
import OfferScreen from '../../pages/offer-page/offer';
import NotFoundScreen from '../../pages/not-found-page/notFoundPage';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';

type AppMainProps = {
    avaibleOffers: number;
    favoriteOffers: number;
}

function App ({avaibleOffers, favoriteOffers}: AppMainProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route 
            path={AppRoute.Main}
            element={<MainScreen avaibleOffers={avaibleOffers} favoriteOffers={favoriteOffers} />}
          />
          <Route 
            path={AppRoute.Login}
            element={<LoginScreen />}
          />
          <Route 
            path={AppRoute.Favorite}
            element={
              <PrivateRoute 
                autorizationStatus={AutorizationStatus.NoAuth}>
                  <FavoritesScreen />
              </PrivateRoute>
            }
          />
          <Route 
            path={AppRoute.Offer}
            element={<OfferScreen />}
          />
          <Route 
            path='*'
            element={<NotFoundScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>  
  );
}


export default App; 
