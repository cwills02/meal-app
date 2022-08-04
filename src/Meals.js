import React, { Fragment, useEffect } from 'react';
import {Link} from 'react-router-dom'

import Container from './Container'
import MealCard from './MealCard'
import BoxContainer from './BoxContainer'

function App({meals, setMeals, displaySideBar}) {
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
    fetch("https://www.themealdb.com/api/json/v2/9973533/latest.php")
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
    mealList = meals.map(meal => {
      return (
        <Fragment key={meal.idMeal}>
            <MealCard>
              <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/meal/${meal.idMeal}`}>
                <h3>{meal.strMeal}</h3>
                <img className='thumbnail' src={`${meal.strMealThumb}/preview`} 
                alt='meal' />
                <h3>Location Origin: {meal.strArea}</h3>
                </Link>
            </MealCard>
        </Fragment>
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
          displaySideBar={displaySideBar}
          setMeals={setMeals}
          meals={meals}
          buttonList={buttonList}
          filterMeals={filterMeals}
          fetchMeals={fetchMeals}
        />
        <Container>
        <h1 style={{color: 'navy', background: 'transparent', marginTop: '0'}}>Newest Meals from Around the World</h1>
          {mealList}
        </Container>
      </div>
    </>
  );
}

export default App;
