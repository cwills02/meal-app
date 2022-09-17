import React, { Fragment, useEffect } from 'react';
import {Link, useNavigate, useLocation} from 'react-router-dom'
import { getDatabase, ref, set, child, get} from "firebase/database";
import {database} from './Firebase';

import Container from './Container'
import MealCard from './MealCard'
import BoxContainer from './BoxContainer'
import FavoriteContainer from './FavoriteContainer';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Meals({meals, setMeals, displaySideBar, favoriteMeals, setFavoriteMeals, user}) {

  let navigate = useNavigate();

  useEffect(() => {
    if(!user) {
      navigate('/');
    }
  }, [user])

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
  }, [user])

  useEffect(() => {
    fetchFavorites();
  }, [user]);

  const dbRef = ref(getDatabase());
  const fetchFavorites = () => {
    get(child(dbRef, `favorites/${user.uid}`)).then((snapshot) => {
      if(snapshot.exists()) {
        setFavoriteMeals(snapshot.val().favorites);
      } else {
        console.log("No data available")
        setFavoriteMeals([]);
      }
    }).catch((error) => {
      console.log(error)
    }) 
  };

  let favMealIds;
  if(favoriteMeals) {
    favMealIds = favoriteMeals.map(meal => meal.idMeal)
  }

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
                {!favMealIds.includes(meal.idMeal)
                ? (
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <FavoriteBorderIcon sx={{cursor: 'pointer', marginBottom: '0px'}} onClick={() => addToFavorites(meal)} />
                <span>Add to Favorites</span>
                </div>
                )
                : (
                  <FavoriteIcon sx={{cursor: 'pointer'}} onClick={() => removeFromFavorites(meal)} />
                )
              }
            </MealCard>
        </Fragment>
      )
    })
  }

  const writeUserFavorites = (favoriteMeals) => {
    const db = database;
    set(ref(db, "favorites/" + user.uid), {
      favorites: favoriteMeals
    })
  }

  const addToFavorites = (meal) => {
    if(!favoriteMeals.includes(meal.idMeal)) {
      setFavoriteMeals([...favoriteMeals, meal]);
      writeUserFavorites([...favoriteMeals, meal]);
    }
  }

  const removeFromFavorites = (meal) => {
    let favMeals = [...favoriteMeals];
    let newFavoriteMeals = favMeals.filter(favorite => favorite !== meal);
    setFavoriteMeals(newFavoriteMeals);
    writeUserFavorites(newFavoriteMeals);
  }

  const filterMeals = (str) => {
    let newMeals = meals;
    let filteredMeals;
    if(newMeals.length > 0) {
       filteredMeals = newMeals.filter(meal => meal.strCategory === str);
       setMeals(filteredMeals);
    }
  }

  const filterFavorites = () => {
    let filteredFavs;
    filteredFavs = meals.filter(meal => favMealIds.includes(meal.idMeal));
    setMeals(filteredFavs);
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
          filterFavorites={filterFavorites}
          fetchFavorites={fetchFavorites}
        />
        <Container>
        <h1 style={{color: 'navy', background: 'transparent', marginTop: '0'}}>Newest Meals from Around the World</h1>
          {mealList}
        </Container>
        <FavoriteContainer favoriteMeals={favoriteMeals} removeFromFavorites={removeFromFavorites} />
      </div>
    </>
  );
}

export default Meals;
