import { Fragment } from "react"
import {useParams} from 'react-router-dom'
import YouTube from 'react-youtube';

const MealDetail = (props) => {
    let {id: idFromUrl} = useParams();

    const selectedMeal = props.meals.find(meal => meal.idMeal === idFromUrl);

    const ingredientList = [];

    for(let key in selectedMeal) {
        if(key.includes('strIngredient') && selectedMeal[key] !== "") {
            ingredientList.push(selectedMeal[key])
        }
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
    
    return(
        <Fragment>
            <div className="meal-detail-container">
                <h1>{selectedMeal.strMeal}</h1>
                <img style={{width: '35vw'}} src={selectedMeal.strMealThumb} />
                <h2>{selectedMeal.strCategory}</h2>
                <ul className="ingredient-list">
                    <h3>Ingredients you will need:</h3>
                    {ingredients}
                </ul>
                <h2>Detailed Directions</h2>
                <p>{selectedMeal.strInstructions}</p>
                <h2>Watch video on how to prepare</h2>
                <iframe 
                  title="directions"
                  src={selectedMeal.strYouTube} 
                  id="ytplayer"
                  />
            </div>
        </Fragment>
    )
}

export default MealDetail