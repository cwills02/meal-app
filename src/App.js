import React, {useState, useEffect} from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from './Login';

import AppBar from './AppBar'
import './App.css';
import Meals from './Meals';

function App() {
  const navigate = useNavigate();

  const [meals, setMeals] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [displaySideBar, setDisplaySideBar] = useState(true)

  useEffect(() => {
    if (loggedIn) {
      navigate("/meals");
    }
  }, [loggedIn]);

  return (
    <div className="App">
      <AppBar displaySideBar={displaySideBar} setDisplaySideBar={setDisplaySideBar} />
      <Routes>
        <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/meals" element={<Meals meals={meals} setMeals={setMeals} displaySideBar={displaySideBar} />} />
      </Routes>
    </div>
  );
}

export default App;
