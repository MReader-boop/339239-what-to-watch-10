import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';
import { store } from './store';
import { Provider } from 'react-redux';
import { checkAuthAction, fetchFilmsAction } from './services/api-actions';

store.dispatch(fetchFilmsAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App />
    </Provider>
  </React.StrictMode>,
);
