import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import CupChoice from './choices/CupChoice';
import TeaChoice from './choices/TeaChoice';
import TapiocaChoice from './choices/TapiocaChoice';
import SizeChoice from './choices/SizeChoice';
import NameChoice from './choices/NameChoice';
import FontChoice from './choices/FontChoice';
import AnimationButton from './choices/AnimationButton';
import NightMode from './choices/NightMode';
import FillUpChoice from './choices/FillUpChoice';

const Generator = () => {
  return (
    <Box>
      <Grid container justifyContent="center">
        <Paper
          sx={{
            height: { lg: '80vh', xs: '70vh' },
            width: { lg: 'auto', xs: '100%' },
            borderRadius: '16px',
          }}
          elevation={0}
        >
          <Typography variant="h4" p={4}>
            Bubble Tea Generator
          </Typography>
          <NameChoice />
          <FontChoice />
          <CupChoice />
          <TeaChoice />
          <TapiocaChoice />
          <SizeChoice />
          <FillUpChoice />
          <AnimationButton />
          <NightMode />
        </Paper>
      </Grid>
    </Box>
  );
};

export default Generator;
