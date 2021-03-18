import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
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

const theme = createMuiTheme({
  palette: {
    primary: {
      lighter: '#9AA5AC',
      light: '#69717B',
      main: '#34393d',
      dark: '#2c2e30'
    },
    secondary: {
      lighter: '#FFFFFF',
      light: '#f5f5f5',
      main: '#6bf2bf',
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
  useEffect(() => {
    if (!incidentsList?.length) {
      // (Elvis operator) from ECMAScript 2020, checks if array or array.length are falsy
      dispatch(fetchIncidents());
      // dispatch(select(incidentsList[0]))
    }
  }, [dispatch, incidentsList])
  // console.log(incidentsList, 'from app root')
  // const primaryLinks = routes.filter((route) => route.menu === 'PRIMARY');
  return (
    <>
      <MuiThemeProvider theme={theme}>
          <Router>
            <Navigation />
            <Switch>
              {
                routes.map(route =>
                  <Route
                    key={route.path}
                    exact={route.path === "/" ? true : false}
                    path={route.path}
                  >
                    {route.component}
                  </Route>
                )
              }
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Router>
      </MuiThemeProvider>
    </>
  );
}

export default App;
