import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import './App.css';
import {
  listIncidents, fetchIncidents,
} from './app/reducers/incidents/incidentSlice'
import Navigation from './components/Navigation';
import routes from './app/routes';
import NotFound from './pages/notFound';
import { checkLoginStatus, fetchLogins, listLogins } from './app/reducers/logins/loginSlice';
import Login from './pages/login';

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
  const incidentsList = useSelector(listIncidents);
  const loginsList = useSelector(listLogins);
  const isLoggedIn = useSelector(checkLoginStatus);
  
  useEffect(() => {
    if (!incidentsList?.length) {
      // (Elvis operator) from ECMAScript 2020, checks if array or array.length are falsy
      dispatch(fetchIncidents());
      // dispatch(select(incidentsList[0]))
    }
    if (!loginsList?.length) {
      dispatch(fetchLogins());
    }
  }, [loginsList, incidentsList])
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
