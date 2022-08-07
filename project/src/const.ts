export enum AppRoutes {
  Main = '/',
  SignIn = 'login',
  MyList = 'mylist',
  Film = 'films/:id/',
  AddReview = 'review',
  Player = 'player/:id'
}

export enum AuthStatus {
  Authed = 'AUTH',
  NotAuthed = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}
