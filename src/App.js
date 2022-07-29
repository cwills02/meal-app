import React from 'react';
import { Routes, Route } from "react-router-dom";


import AppBar from './AppBar'
import './App.css';
import Meals from './Meals';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Routes>
        <Route path="/" element={<Meals />} />
      </Routes>
    </div>
  );
}

export default App;
