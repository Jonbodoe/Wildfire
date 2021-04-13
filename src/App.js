import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector, useDispatch, batch } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import {
  fetchIncidents,
} from './app/reducers/incidents/incidentSlice'
import Navigation from './components/Navigation';
import routes from './app/routes';
// import NotFound from './pages/notFound';
import { checkLoginStatus, fetchLogins } from './app/reducers/logins/loginSlice';
import Login from './pages/login';
import NotFound from './pages/notFound.js';
import { fetchUpdates } from './app/reducers/updates/updateSlice';
import { fetchProfiles } from './app/reducers/profiles/profilesSlice';

const theme = createMuiTheme({
  palette: {
    primary: {
      lighter: '#b7c2c9',
      light: '#69717B',
      main: '#2a2f36',
      dark: '#21252a'
    },
    secondary: {
      lighter: '#FFFFFF',
      light: '#f5f5f5',
      main: '#6bf2bf',
      darkish: '#57d9c1',
      dark: '#058F95'
    },
  },
  typography: {
    fontFamily: [
      'Work Sans',
      'Arial',
      'sans-serif',
    ].join(','),
    useNextVariants: true
  },
});


function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(checkLoginStatus);

  useEffect(() => {
    batch(() => {
      dispatch(fetchIncidents());
      dispatch(fetchLogins());
      dispatch(fetchUpdates());
      dispatch(fetchProfiles());
    })
  }, [])

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <Router>
          <Switch>
            {
              isLoggedIn ? routes.map(route => {
                if (route.path === "/") {
                  return <Route key={route.path} exact path="/"><Redirect to="/dashboard" /></Route>
                } else {
                  return <Route
                    key={route.path}
                    path={route.path}
                  >
                    <Navigation />
                    {route.component}
                  </Route>
                }
              })
                :
                <Route exact path="/">
                  <Login />
                </Route>
            }
            <Route path="*">
              {
                isLoggedIn ? <NotFound /> : <Redirect to="/" />
              }
            </Route>
          </Switch>
        </Router>
      </MuiThemeProvider>
    </>
  );
}

export default App;
