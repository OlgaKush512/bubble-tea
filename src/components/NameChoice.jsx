import { Grid, IconButton, TextField, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { getName } from '../components/slices/inputNameSlice';
import SvgIcon from '@mui/material/SvgIcon';
import SearchIcon from '@mui/icons-material/Search';
const SvgConfirm = () => {
  return (
    <SvgIcon>
      {/* credit: plus icon from https://heroicons.com/ */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
        />
      </svg>
    </SvgIcon>
  );
};

const NameChoice = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name.name);
  console.log(`name: ${name}`);

  return (
    <>
      <Grid container justifyContent="center" alignItems="center" p={1}>
        <Grid item xs={4}>
          <Typography textAlign="left" ml={2}>
            NAME
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            autoComplete="off"
            id="outlined-basic"
            variant="outlined"
            size="small"
            sx={{ width: '100%' }}
            InputProps={{
              endAdornment: (
                <IconButton type="button" aria-label="search">
                  <SvgConfirm />
                </IconButton>
              ),
            }}
            onChange={(e) => dispatch(getName(e.target.value))}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default NameChoice;
