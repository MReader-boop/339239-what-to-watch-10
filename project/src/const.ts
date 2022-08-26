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
  AllGenres = 'ALL_GENRES',
  Comedies = 'COMEDIES',
  Crime = 'CRIME',
  Documentary = 'DOCUMENTARY',
  Dramas = 'DRAMAS',
  Horror = 'HORROR',
  KidsAndFamily = 'KIDSANDFAMILY',
  Romance = 'ROMANCE',
  SciFi = 'SCIFI',
  Thrillers = 'THRILLERS'
}
