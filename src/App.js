import React, {useState, useEffect} from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from './Login';
import SignUp from './SignUp';
import {auth} from './Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { signOut } from 'firebase/auth';

import AppBar from './AppBar'
import './App.css';
import Meals from './Meals';
import MealDetail from './MealDetail'

function App() {
  const navigate = useNavigate();

  const [meals, setMeals] = useState([]);
  const [favoriteMeals, setFavoriteMeals] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [displaySideBar, setDisplaySideBar] = useState(false);
  const [user, setUser] = useState('');
  const [query, setQuery] = useState('')

  const handleQueryChange = (query) => {
    setQuery(query.trim())
  }

  const showingMeals = query === '' ? meals : meals.filter(meal => meal.strMeal.toLowerCase().includes(query.toLowerCase()))

  onAuthStateChanged(auth, (user) => {
    if(user === '') {
      setLoggedIn(false);
      navigate("/");
    } 
  })

  useEffect(() => {
    if (loggedIn) {
      navigate("/meals");
    }
  }, [loggedIn]);

  const signUserOut = (auth) => {
    signOut(auth).then(() => {
      setUser('');
      setLoggedIn(false);
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className="App">
      <AppBar displaySideBar={displaySideBar} setDisplaySideBar={setDisplaySideBar} signUserOut={signUserOut} />
      <div>
        {
        loggedIn &&
        <input
          placeholder='Search Meals'
          value={query}
          onChange={(event) => handleQueryChange(event.target.value)}
        />
        }
      </div>
      <Routes>
        <Route path="/" element={<Login setLoggedIn={setLoggedIn} user={user} setUser={setUser} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/meals" element={<Meals meals={meals} showingMeals={showingMeals} setMeals={setMeals} favoriteMeals={favoriteMeals} setFavoriteMeals={setFavoriteMeals} displaySideBar={displaySideBar} user={user} />} />
        <Route path="/meal/:id" element={<MealDetail meals={meals} user={user} displaySideBar={displaySideBar} favoriteMeals={favoriteMeals} />}
        loggedIn={loggedIn}
        />
      </Routes>
    </div>
  );
}

export default App;
