import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function SimpleContainer(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ height: 'fit-content', width: '90%', backgroundColor: '#ececec', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '15px', borderRadius: '20px' }}>
          {props.children}
        </Box>
      </Container>
    </React.Fragment>
  );
}
