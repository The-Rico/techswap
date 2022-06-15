import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export default function Hero() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          mt: 2,
          width: '100%',
          height: 128,
        },
      }}
    >
      <Paper elevation={0} />
      test
    </Box>
  );
}
