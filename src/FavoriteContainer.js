import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const FavoriteContainer = (props) => {
    let favorites;
    {
        props.favoriteMeals.length > 0
        ?
        favorites = props.favoriteMeals.map((meal, idx) => {
        return (
            <li key={idx}>
                <RemoveCircleOutlineIcon onClick={() => props.removeFromFavorites(meal)} />{meal}
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