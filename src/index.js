import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
// import { Auth0Provider } from "@auth0/auth0-react";
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    {/* <Auth0Provider
    domain="wildfireapp.us.auth0.com"
    clientId="yxNUB9lAEzvwZnbG9Suf21c3iNpB8MOK"
    redirectUri={window.location.origin}
  > */}
    <App />
  {/* </Auth0Provider> */}
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
