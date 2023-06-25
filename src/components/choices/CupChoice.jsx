import { FormControl, Grid, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCup } from "../slices/cupSlice";

const CupChoice = () => {
  const dispatch = useDispatch();
  const cup = useSelector((state) => state.cup.cup);

  return (
    <>
      <Grid container justifyContent="center" alignItems="center" p={1}>
        <Grid item xs={2} lg={5}>
          <Typography textAlign="left" ml={2}>
            CUP
          </Typography>
        </Grid>
        <Grid item xs={10} lg={7}>
          <FormControl fullWidth size="small">
            <Select
              value={cup}
              onChange={(event) => dispatch(getCup(event.target.value))}
            >
              <MenuItem value={0}>Green</MenuItem>
              <MenuItem value={1}>Peach</MenuItem>
              <MenuItem value={2}>Red</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default CupChoice;
