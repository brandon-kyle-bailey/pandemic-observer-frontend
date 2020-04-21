import React from 'react';
import logo from './logo.svg';
import virus from './img/virus.png';
import './App.css';

import StatisticsComponent from "./components/statistics.component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={virus} className="App-virus" alt="Coronavirus" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <StatisticsComponent />
    </div>
  );
}

export default App;
