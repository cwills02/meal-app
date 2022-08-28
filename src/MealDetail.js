import { Fragment, useEffect } from "react"
import {useParams, Link, Navigate} from 'react-router-dom'
import YouTube from 'react-youtube';
import './App.css'
import FavoriteIcon from '@mui/icons-material/Favorite';

const MealDetail = (props) => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behabior: 'smooth'})
    }, [])

    let {id: idFromUrl} = useParams();

    const selectedMeal = props.meals.find(meal => meal.idMeal === idFromUrl);

    const ingredientList = [];

    let videoID = '';

    for(let key in selectedMeal) {
        if(key.includes('strIngredient') && selectedMeal[key] !== "") {
            ingredientList.push(selectedMeal[key])
        }
        videoID = selectedMeal.strYoutube.slice(32,43);
    }

    let ingredients;
    if(ingredients !== []) {

    ingredients = ingredientList.map((ing, idx) => {
            return (
                <li key={idx}>
                    {ing}
                </li>
            )
        })
    }
    
    if(!selectedMeal || props.meals === []) {
        return <Navigate to="/meals" />
    } else {
        return(
            <Fragment>
                <Link to='/meals'>
                    <button className="meal-detail">
                        Back Home
                    </button>
                </Link>
                <div className="meal-detail-container">
                    {
                        props.favoriteMeals.includes(selectedMeal.strMeal)
                        &&
                        <FavoriteIcon sx={{color: 'salmon', paddingTop: '20px'}} />
                    }
                    <h1>{selectedMeal.strMeal}</h1>
                    <img style={{width: '35vw'}} src={selectedMeal.strMealThumb} alt="meal thumbnail" />
                    <h2>{selectedMeal.strCategory}</h2>
                    <ul className="ingredient-list">
                        <h3>Ingredients you will need:</h3>
                        {ingredients}
                    </ul>
                    <h2>Directions on how to make</h2>
                    <p style={{width: '80%'}}>{selectedMeal.strInstructions}</p>
                    <h2>Video Demonstration</h2>
                    <YouTube videoId={videoID} />
                </div>
            </Fragment>
        )
    }
}

export default MealDetail