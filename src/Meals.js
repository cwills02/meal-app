import React, { useEffect, useState } from 'react';

import Container from './Container'
import MealCard from './MealCard'
import BoxContainer from './BoxContainer'

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
      .then(res => res.json())
      .then(data => 
        setMeals(data.meals))
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
          <img className='thumbnail' src={`${meal.strMealThumb}/preview`} 
          alt='meal' />
        </MealCard>
      )
    })
  }

  const filterMeals = (str) => {
    let newMeals = meals;
    let filteredMeals;
    if(newMeals.length > 0) {
       filteredMeals = newMeals.filter(meal => meal.strCategory === str);
       setMeals(filteredMeals);
    }
  }

  return (
    <>
      <div className='outer-container'>
        <BoxContainer 
          meals={meals}
          buttonList={buttonList}
          filterMeals={filterMeals}
        />
        <Container sx={{width: '75%'}}>
          {mealList}
        </Container>
      </div>
    </>
  );
}

export default App;
