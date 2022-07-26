import React, { useEffect, useState } from 'react';

import AppBar from './AppBar'
import './App.css';
import Container from './Container'
import MealCard from './MealCard'

function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v2/9973533/randomselection.php")
      .then(res => res.json()).then(data => 
        setMeals(data.meals));
  }, [])

  let mealList; 
  if(meals === []) {
    mealList = <h1>No Meals Yet!</h1>
  } else {
    console.log(meals)
    mealList = meals.map(meal => {
      return (
        <MealCard key={meal.idMeal}>
          <h3>{meal.strMeal}</h3>
          <img src={`${meal.strMealThumb}/preview`} 
          alt='meal' />
        </MealCard>
      )
    })
  }

  return (
    <div className="App">
      <AppBar />
      <Container>
        {mealList}
      </Container>
    </div>
  );
}

export default App;
