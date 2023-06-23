import { Grid, Paper } from '@mui/material';
import React from 'react';

const Ingredients = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <Paper
          sx={{
            mt: 1,
            height: '19vh',
            borderRadius: '4px 4px 4px 16px ',
          }}
          elevation={0}
        ></Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper
          sx={{
            mt: 1,
            height: '19vh',
            borderRadius: '4px',
          }}
          elevation={0}
        ></Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper
          sx={{
            mt: 1,
            height: '19vh',
            borderRadius: '4px 4px 4px 4px ',
          }}
          elevation={0}
        ></Paper>
      </Grid>
    </Grid>
  );
};

export default Ingredients;