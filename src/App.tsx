import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import store from './store';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ToastContainer autoClose={3000} />
      <Routes />
    </Provider>
  );
}

export default App;
