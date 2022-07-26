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
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <div>Meal App</div>
          </Typography>
          {
            window.location.pathname.includes("/meal")
            &&
            <Link style={{textDecoration: 'none', position: 'absolute', right: '10px'}} onClick={() => signUserOut(auth)} to='/'>Sign Out
            </Link> 
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
