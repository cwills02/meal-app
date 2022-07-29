import * as React from 'react';
import Box from '@mui/joy/Box';
import TextField from '@mui/joy/TextField';

export default function TextFieldColors() {
  return (
    <Box
     sx={{
        width: '50%',
        background: 'salmon',
        transform: 'translateX(50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '20px'
    }}
    >
      <TextField
        placeholder="Email"
        color="neutral"
        type="email"
        sx={{padding: '20px', border: 'none'}}
      />
      <TextField
        placeholder="Password"
        color="neutral"
        type="password"
        sx={{padding: '20px'}}
      />
    </Box>
  );
}
