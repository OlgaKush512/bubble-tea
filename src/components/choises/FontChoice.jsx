import { FormControl, Grid, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFont } from "../slices/fontSlice";

const FontChoice = () => {
  const dispatch = useDispatch();
  const font = useSelector((state) => state.font.font);

  return (
    <>
      <Grid container justifyContent="center" alignItems="center" p={1}>
        <Grid item xs={4}>
          <Typography textAlign="left" ml={2}>
            FONT
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <FormControl fullWidth size="small">
            <Select
              value={font}
              onChange={(event) => dispatch(getFont(event.target.value))}
            >
              <MenuItem value={0}>Ysabeau</MenuItem>
              <MenuItem value={1}>Caprasimo</MenuItem>
              <MenuItem value={2}>Pathway Extreme</MenuItem>
              <MenuItem value={3}>Lexend Peta</MenuItem>
              <MenuItem value={4}>Josefin Slab</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default FontChoice;
