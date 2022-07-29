import React, {useState, useEffect} from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from './Login';

import AppBar from './AppBar'
import './App.css';
import Meals from './Meals';

function App() {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      navigate("/meals");
    }
  }, [loggedIn]);

  return (
    <div className="App">
      <AppBar />
      <Routes>
        <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/meals" element={<Meals />} />
      </Routes>
    </div>
  );
}

export default App;
