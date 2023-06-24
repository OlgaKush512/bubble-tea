import { FormControl, Grid, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTapioca } from "../slices/tapiocaSlice";

const TapiocaChoice = () => {
  const dispatch = useDispatch();
  const tapioca = useSelector((state) => state.tapioca.tapioca);

  return (
    <>
      <Grid container justifyContent="center" alignItems="center" p={1}>
        <Grid item xs={4}>
          <Typography textAlign="left" ml={2}>
            TAPIOCA
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <FormControl fullWidth size="small">
            <Select
              value={tapioca}
              onChange={(event) => dispatch(getTapioca(event.target.value))}
            >
              <MenuItem value={0}>Caramel</MenuItem>
              <MenuItem value={1}>Mango</MenuItem>
              <MenuItem value={2}>Chocolate</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default TapiocaChoice;
