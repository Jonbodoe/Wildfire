import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import Navigation from './components/Navigation';
import routes from './app/routes';
import NotFound from './pages/NotFound';

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
       main: '#81F0C6',
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
  return (
    <>
      <MuiThemeProvider theme = { theme }>
        <Router>
          <Navigation/>
          <Switch>
              {
                routes.map(route => <Route key={route.path} exact path={route.path}>{route.component}</Route>)
              }
              <Route path="*">
                <NotFound/>
            </Route>
          </Switch>
        </Router>
      </MuiThemeProvider>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Counter />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <span>
    //       <span>Learn </span>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux-toolkit.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux Toolkit
    //       </a>
    //       ,<span> and </span>
    //       <a
    //         className="App-link"
    //         href="https://react-redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React Redux
    //       </a>
    //     </span>
    //   </header>
    // </div>
  );
}

export default App;
