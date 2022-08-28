import * as React from 'react';
import Box from '@mui/material/Box';

export default function BoxContainer(props) {

  return (
    <Box 
    className={!props.displaySideBar ? 'box-container box-container-active' : 'box-container'}
    sx={{marginTop: '0px'}}>
      <h2 style={{color: '#000080'}}>Category Filter</h2>
      {props.children}
      {props.meals.length > 0 && props.buttonList.map(item => {
            return (
              <div key={item}>
                <button id={item} className='filterButton' onClick={(e) => props.filterMeals(e.target.id)}>{item}</button> 
              </div>
            )
          }
          )}
      <div className='buttonList'>
        <button 
          onClick={props.fetchMeals}
          className='restore-button'
          >See Full List</button>
        <button className='favorite-button' onClick={props.filterFavorites}>Show Favorites</button>
      </div>
    </Box>
  );
}

