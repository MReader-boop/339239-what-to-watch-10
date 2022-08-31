export enum AppRoutes {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id/',
  AddReview = '/review',
  Player = '/player/:id'
}

export enum AuthStatus {
  Authed = 'AUTH',
  NotAuthed = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum Filters {
  AllGenres = 'All',
  Comedies = 'Comedy',
  Crime = 'Crime',
  Adventure = 'Adventure',
  Documentary = 'Documentary',
  Dramas = 'Drama',
  Horror = 'Horror',
  KidsAndFamily = 'Kids & Family',
  Romance = 'Romance',
  SciFi = 'Sci-Fi',
  Thrillers = 'Thriller',
  Fantasy = 'Fantasy',
  Action = 'Action'
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
}
