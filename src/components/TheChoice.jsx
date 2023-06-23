import { FormControl, Grid, MenuItem, Select, Typography } from '@mui/material';
// import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getThe } from './slices/theSlice';

const TheChoice = () => {
  // const [the, setTea] = useState('');

  // const handleChangeTea = (event) => {
  //   setTea(event.target.value);
  // };

  const dispatch = useDispatch();
  const the = useSelector((state) => state.the.the);
  return (
    <>
      <Grid container justifyContent="center" alignItems="center" p={1}>
        <Grid item xs={4}>
          <Typography textAlign="left" ml={2}>
            TEA
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <FormControl fullWidth size="small">
            <Select
              value={the}
              onChange={(event) => dispatch(getThe(event.target.value))}
            >
              <MenuItem value={0}>Matcha</MenuItem>
              <MenuItem value={1}>Darjeeling</MenuItem>
              <MenuItem value={2}>Black The</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default TheChoice;
