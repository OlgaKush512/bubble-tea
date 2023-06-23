import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import CupChoice from './CupChoice';
import TheChoice from './TheChoice';
import TapiocaChoice from './TapiocaChoice';
import SizeChoice from './SizeChoice';
import NameChoice from './NameChoice';

const Generator = () => {
  return (
    <Box>
      <Grid container justifyContent="center">
        <Paper
          sx={{
            height: '80vh',
            borderRadius: '4px 16px 16px 4px ',
          }}
          elevation={0}
        >
          <Typography variant="h6" fontWeight={600} p={4}>
            Bubble Tea Generator
          </Typography>
          <NameChoice />
          <CupChoice />
          <TheChoice />
          <TapiocaChoice />
          <SizeChoice />
        </Paper>
      </Grid>
    </Box>
  );
};

export default Generator;
