const Settings = {
  AvaibleOffers: 110,
  FavoriteOffers: 4
};

export enum AppRoute {
  Login = '/login',
  Favorite = '/favorites',
  Main = '/',
  Offer = '/offer/id:'
}

export enum AutorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export {Settings};
