import './App.css'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Link } from 'react-router-dom';

const FavoriteContainer = (props) => {
    let favorites;
    {
        props.favoriteMeals.length > 0
        ?
        favorites = props.favoriteMeals.map((meal) => {
        return (
            <li key={meal.idMeal} style={{display: 'flex'}}>
                <RemoveCircleOutlineIcon sx={{width: '1em', height: 'auto', cursor: 'pointer'}} onClick={() => props.removeFromFavorites(meal)} /><div><Link style={{textDecoration: 'none'}} to={`/meal/${meal.idMeal}`}>{meal.strMeal}</Link></div>
            </li>
        )
    }) : favorites = <h3>No favorites yet</h3>
}

    return(
        <div className="favorite-container">
            <h1>Favorite Meals</h1>
            <ul>
                {favorites}
            </ul>
        </div>
    )
}

export default FavoriteContainer