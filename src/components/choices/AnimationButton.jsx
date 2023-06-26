import { FormControlLabel, FormGroup, Grid } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { getAnimation } from '../slices/animationSlice';
import Switch from '@mui/material/Switch';

const AnimationButton = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Grid container justifyContent="left" alignItems="center" pl={2}>
        <Grid item xs={10} lg={10}>
          <FormGroup>
            <FormControlLabel
              control={<Switch />}
              label="ANIMATION"
              onChange={() => dispatch(getAnimation())}
            />
          </FormGroup>
        </Grid>
      </Grid>
    </>
  );
};

export default AnimationButton;
