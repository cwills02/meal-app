import React, { useEffect, useState } from 'react';
import AppBar from './AppBar'

import './App.css';

function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v2/9973533/latest.php")
      .then(res => res.json()).then(data => setMeals(data.meals));
    console.log(meals);
  }, [])

  // const fetchData = () => fetch(`https://weatherdbi.herokuapp.com/data/weather/${locationInput}`)
  // .then((res) => res.json())
  // .then((data) => {
  //   setWeatherData(data);
  // });

  let mealList; 
  if(meals === []) {
    mealList = <h1>No Meals Yet!</h1>
  } else {
    mealList = meals.map(meal => {
      return (
        <div key={meal.idMeal}>
          <h3>{meal.strMeal}</h3>
          <img src={`${meal.strMealThumb}/preview`} 
          alt='meal' />
        </div>
      )
    })
  }

  return (
    <div className="App">
      <AppBar />
      <div className='container'>
        {mealList}
      </div>
    </div>
  );
}

export default App;
