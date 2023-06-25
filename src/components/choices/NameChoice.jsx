import { Grid, IconButton, TextField, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getName, isSend } from "../slices/inputNameSlice";
import { SvgConfirm } from "../../tools/svgImages";

const NameChoice = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name.name);
  console.log(`name: ${name}`);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(isSend(true));
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" p={1}>
      <Grid item xs={2} lg={5}>
        <Typography textAlign="left" ml={2}>
          NAME
        </Typography>
      </Grid>
      <Grid item xs={10} lg={7}>
        <TextField
          autoComplete="off"
          id="outlined-basic"
          variant="outlined"
          size="small"
          sx={{ width: "100%" }}
          value={name}
          InputProps={{
            endAdornment: (
              <IconButton
                type="button"
                aria-label="search"
                onClick={() => dispatch(isSend(true))}
              >
                <SvgConfirm />
              </IconButton>
            ),
          }}
          onChange={(e) => dispatch(getName(e.target.value))}
          onKeyDown={handleKeyDown}
        />
      </Grid>
    </Grid>
  );
};

export default NameChoice;
