import React, { useEffect, useState } from 'react';

import AppBar from './AppBar'
import './App.css';
import Container from './Container'
import MealCard from './MealCard'

function App() {
  const [meals, setMeals] = useState([]);

  let buttonList = [];
  if(meals.length > 1) {
    let buttons = meals.map(meal => meal.strCategory);
    for(let i = 0; i < buttons.length; i++) {
      if(!buttonList.includes(buttons[i])) {
        buttonList.push(buttons[i]);
      }
    }
  } 

  const fetchMeals = () => {
    fetch("https://www.themealdb.com/api/json/v2/9973533/randomselection.php")
      .then(res => res.json()).then(data => 
        setMeals(data.meals));
  }

  useEffect(() => {
    fetchMeals();
  }, [])

  let mealList; 
  if(meals === []) {
    mealList = <h1>No Meals Yet!</h1>
  } else if(meals) {
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

  const filterDesserts = () => {
    let newMeals = meals;
    let dessertMeals;
    if(newMeals.length > 0) {
       dessertMeals = newMeals.filter(meal => meal.strCategory === 'Dessert');
       setMeals(dessertMeals);
    }
  }

  return (
    <div className="App">
      <AppBar />
      <Container>
        {meals.length > 0 && buttonList.map(meal => {
          return (
            <div className='buttonList' key={meal}>
              <button onClick={filterDesserts}>{meal}</button>
            </div>
          )
        }
        )}
        {mealList}
      </Container>
    </div>
  );
}

export default App;
