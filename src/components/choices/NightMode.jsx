import React from 'react';
import { useDispatch } from 'react-redux';
import { FormControlLabel, FormGroup, Grid } from '@mui/material';
import Switch from '@mui/material/Switch';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { getNight } from '../slices/nightModeSlice';

const NightMode = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Grid container justifyContent="left" alignItems="center" pl={2}>
        <Grid item xs={1} lg={2}>
          <FormGroup>
            <FormControlLabel
              control={<Switch />}
              onChange={() => dispatch(getNight())}
            />
          </FormGroup>
        </Grid>
        <Grid item>
          <ModeNightIcon />
        </Grid>
      </Grid>
    </>
  );
};

export default NightMode;
