import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import RepositoriesList from './components/RepositoriesList';
import { store } from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const App = () => {
  return (
    <Provider store={store}>
      <div>Hello there</div>
      <RepositoriesList />
    </Provider>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
