import * as React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Hero from './components/Hero';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function App() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          justifyContent='center'
          alignItems='center'
          container
          rowSpacing={4}
          columnSpacing={{ xs: 1, sm: 2, md: 7 }}
        >
          <Grid item xs={8}>
            <Hero />
          </Grid>
          <Grid item xs={6}>
            <Item>xs=6</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>xs=6</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>Footer</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
