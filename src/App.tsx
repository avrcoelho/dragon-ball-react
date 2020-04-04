import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer autoClose={3000} />
    </Provider>
  );
}

export default App;
