/*

In a React app:
-- App.js file typically is top-level of application
-- index.js is the entry point

Recall:
-- React component = small, reusable chunk of code with one function, often involved rendering HTML and re-rendering whenever some data changes

*/

import React from 'react'; // Creates object called React, which contains necessary methods to use React library, necessary in App.js and index.js
import logo from './logo.svg';
import './App.css';

function App() { // function component, can be used to create as many instances of itself as needed, must start with capital
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
    </div>
  );
}

export default App; // is exported to index.js so it can be rendered at the entry point, must be imported in index.js
