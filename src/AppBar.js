import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar({setDisplaySideBar, displaySideBar}) {
  let currentURL = window.location.href;

  let titlePosition;
  if(window.location.href.includes('meals')) {
    titlePosition = 'translateX(-5%)';
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
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'center', transform: titlePosition }}>
            Meal App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
