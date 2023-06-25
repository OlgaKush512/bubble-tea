import { FormControl, Grid, MenuItem, Select, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { getTea } from "../slices/teaSlice";

const TeaChoice = () => {
  const dispatch = useDispatch();
  const tea = useSelector((state) => state.tea.tea);
  return (
    <>
      <Grid container justifyContent="center" alignItems="center" p={1}>
        <Grid item xs={2} lg={5}>
          <Typography textAlign="left" ml={2}>
            TEA
          </Typography>
        </Grid>
        <Grid item xs={10} lg={7}>
          <FormControl fullWidth size="small">
            <Select
              value={tea}
              onChange={(event) => dispatch(getTea(event.target.value))}
            >
              <MenuItem value={0}>Matcha</MenuItem>
              <MenuItem value={1}>Darjeeling</MenuItem>
              <MenuItem value={2}>Black Tea</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default TeaChoice;
