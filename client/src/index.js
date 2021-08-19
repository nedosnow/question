import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store'


import { Provider } from 'react-redux';
import { UserContextProvider } from './context/userContext';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserContextProvider>

    <App />
      </UserContextProvider>

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


