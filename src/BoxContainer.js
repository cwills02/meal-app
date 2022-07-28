import * as React from 'react';
import Box from '@mui/material/Box';

export default function BoxContainer(props) {
  return (
    <Box style={{marginTop: '15px'}}>
      {props.children}
    </Box>
  );
}

