import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { auth } from './Firebase';

export default function ButtonAppBar({setDisplaySideBar, displaySideBar, signUserOut}) {
  let currentURL = window.location.href;
  let titlePosition;
  if(currentURL.includes('meal-db-portfolio.web.app/meal/')) {
    titlePosition = '3.5vw';
  } 

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: 'salmon'}}>
        <Toolbar>
          {
          currentURL.includes('meals') 
          &&
          <IconButton
            onClick={() => setDisplaySideBar(!displaySideBar)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          }
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, transform: `translateX(${titlePosition})`}}>
            Meal App
          </Typography>
          {
            currentURL.includes('meal')
            &&
            <Link style={{textDecoration: 'none'}} onClick={() => signUserOut(auth)} to='/'>Sign Out
            </Link> 
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
