import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './app/store';
// import { Auth0Provider } from "@auth0/auth0-react";
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
      <Provider store={store}>
        <App />
        </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
