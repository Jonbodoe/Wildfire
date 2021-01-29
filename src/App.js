import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link as RouterLink
} from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import Navigation from './pages/navigation';
// import Dashboard from './pages/dashboard';
// import Maps from './pages/maps';
// import Updates from './pages/updates';
// import Incidents from './pages/incidents';
import routes from './app/routes';
// import { Auth0Provider } from "@auth0/auth0-react";

const theme = createMuiTheme({
  palette: {
     primary: {
        light: '#F8F8F8',
        main: '#69717B',
        dark: '#353A3F'
     },
     secondary: {
       light: '#FFFFFF',
       main: '#81F0C6',
       dark: '#058F95'
     },
  },
  typography: { 
     useNextVariants: true
  }
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
