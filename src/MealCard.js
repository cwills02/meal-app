import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function BasicCard(props) {
  return (
    <Card sx={{ width: '50%', backgroundColor: 'salmon', color: 'white', margin: '10px' }}>
      <CardContent>
        {props.children}
      </CardContent>
    </Card>
  );
}
