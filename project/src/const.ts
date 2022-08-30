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
  AllGenres = 'all',
  Comedies = 'comedy',
  Crime = 'crime',
  Documentary = 'documentary',
  Dramas = 'drama',
  Horror = 'horror',
  KidsAndFamily = 'kids-and-family',
  Romance = 'romance',
  SciFi = 'sci-fi',
  Thrillers = 'thriller',
}

export enum APIRoute {
  Films = '/films',
}
