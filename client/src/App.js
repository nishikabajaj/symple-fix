import React, { useEffect, useState } from 'react';
import './App.css';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [data, setData] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    fetch('http://localhost:5000')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.error('There was an error!', error)); 
  }, []);

  return(
    <div className="App">
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/dash" element={<Dashboard />} />
        </Routes>

      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
