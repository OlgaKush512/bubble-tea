import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Slider, Typography } from '@mui/material';
import { getFilling } from '../slices/fillingSlice';

const FillUpChoice = () => {
  const dispatch = useDispatch();
  const fillingState = useSelector((state) => state.filling.filling);

  const handleChange = (event, newValue) => {
    dispatch(getFilling(newValue));
  };

  return (
    <>
      <Grid container justifyContent="center" alignItems="center" p={1}>
        <Grid item xs={2} lg={5}>
          <Typography textAlign="left" pl={2}>
            FILLING
          </Typography>
        </Grid>
        <Grid item xs={1} justifyContent="center" />
        <Grid item xs={8} lg={5} justifyContent="center">
          <Slider
            aria-label="Volume"
            value={fillingState}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={1} justifyContent="center" />
      </Grid>
    </>
  );
};

export default FillUpChoice;
