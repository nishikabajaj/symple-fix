/*

In a React app:
-- App.js file typically is top-level of application
-- index.js is the entry point

Recall:
-- React component = small, reusable chunk of code with one function, often involved rendering HTML and re-rendering whenever some data changes

*/

import React from 'react'; // Creates object called React, which contains necessary methods to use React library, necessary in App.js and index.js
import logo from './logo0.png'
import './App.css';


function Button(props){
  return(
    <button>{props.text}</button>
  );
}

function App() { // function component, can be used to create as many instances of itself as needed, must start with capital
  return (
    <div className="App">
      
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>
      </head>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button text="Log In"/>
        <Button text="Sign Up"/>
      </header>
    </div>
    );
  }


export default App; // is exported to index.js so it can be rendered at the entry point, must be imported in index.js
