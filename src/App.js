import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link as RouterLink
} from "react-router-dom";
import './App.css';
import Navigation from './components/navigation';
import Dashboard from './pages/dashboard';
import Maps from './pages/maps';
import Updates from './pages/updates';
import Incidents from './pages/incidents';

function App() {
  return (
    <>
    <Router>
      <Navigation/>
      <Switch>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/updates">
            <Updates />
          </Route>
          <Route path="/incidents">
            <Incidents />
          </Route>
          <Route path="/maps">
            <Maps/>
          </Route>
      </Switch>
    </Router>
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
