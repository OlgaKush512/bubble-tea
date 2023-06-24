import { Grid, Slider, Typography } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSize } from "../slices/sizeSlice";
const marks = [
  {
    value: 0,
    label: "S",
  },
  {
    value: 50,
    label: "M",
  },

  {
    value: 100,
    label: "L",
  },
];

const SizeChoice = () => {
  const dispatch = useDispatch();
  const size = useSelector((state) => state.size.size);

  const handleChange = (event, value) => {
    const selectedMark = marks.find((mark) => mark.value === value);
    if (selectedMark) {
      dispatch(getSize(selectedMark.label));
    }
  };

  return (
    <>
      <Grid container justifyContent="center" alignItems="center" p={1}>
        <Grid item xs={4}>
          <Typography textAlign="left" pl={2}>
            SIZE
          </Typography>
        </Grid>
        <Grid item xs={1} justifyContent="center" />
        <Grid item xs={6} justifyContent="center">
          <Slider
            aria-label="Restricted values"
            defaultValue={0}
            step={null}
            marks={marks}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={1} justifyContent="center" />
      </Grid>
    </>
  );
};

export default SizeChoice;
