import { Box, Container, Grid, Paper, Stack } from '@mui/material';
import React from 'react';
import Generator from './Generator';
import Ingredients from './Ingredients';
import PreviewTea from './PreviewTea';

const MainEcran = () => {
  return (
    <Container sx={{ minWidth: '90vw' }}>
      <Paper sx={{ borderRadius: '16px', mt: 10 }}>
        <Grid
          container
          columns={12}
          justifyContent="center"
          spacing={1}
          sx={{ padding: '10px' }}
        >
          <Grid item xs={8}>
            <PreviewTea />
            <Ingredients />
          </Grid>
          <Grid item sx={2}>
            <Generator />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default MainEcran;
