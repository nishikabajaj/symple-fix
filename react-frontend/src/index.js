import React from 'react';
import ReactDOM from 'react-dom/client'; // The methods imported here interact with the DOM
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// once a component (App) is imported, can be used with an HTML-like syntax that resembles a self-closing tag
// .createRoot() and .render() used to render components to browser
/* 
-- createRoot = creates React root container for displaying content, given a DOM element to render, returns reference to the root container which .render() can be called on
-- after initial setup, React will manage DOM of application, and any updates to UI is taken care of; adding more components should take place in App.js file
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
