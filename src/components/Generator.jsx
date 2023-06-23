import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Slider,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
const marks = [
  {
    value: 0,
    label: 'S',
  },
  {
    value: 50,
    label: 'M',
  },

  {
    value: 100,
    label: 'L',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

const Generator = () => {
  const [cup, setCup] = useState('');

  const handleChangeCup = (event) => {
    setCup(event.target.value);
  };

  const [the, setTea] = useState('');

  const handleChangeTea = (event) => {
    setTapioca(event.target.value);
  };

  const [tapioca, setTapioca] = useState('');

  const handleChangeTapioca = (event) => {
    setTapioca(event.target.value);
  };
  return (
    <Box>
      <Grid container justifyContent="center">
        <Paper
          sx={{
            height: '80vh',
            borderRadius: '4px 16px 16px 4px ',
          }}
          elevation={0}
        >
          <Typography variant="h6" fontWeight={600} p={4}>
            Bubble Tea Generator
          </Typography>
          <Grid container justifyContent="center" alignItems="center" p={1}>
            <Grid item xs={4}>
              <Typography textAlign="left" ml={2}>
                NAME
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                size="small"
                sx={{ width: '100%' }}
              >
                <IconButton type="button">
                  <ThumbUpAltIcon />
                </IconButton>
              </TextField>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" p={1}>
            <Grid item xs={4}>
              <Typography textAlign="left" ml={2}>
                CUP
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Cup</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={cup}
                  label="Name"
                  onChange={handleChangeCup}
                >
                  <MenuItem value={10}>Matcha</MenuItem>
                  <MenuItem value={20}>Darjeeling</MenuItem>
                  <MenuItem value={30}>Black The</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" p={1}>
            <Grid item xs={4}>
              <Typography textAlign="left" ml={2}>
                TEA
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">The</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={the}
                  label="The"
                  onChange={handleChangeCup}
                >
                  <MenuItem value={10}>Matcha</MenuItem>
                  <MenuItem value={20}>Darjeeling</MenuItem>
                  <MenuItem value={30}>Black The</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" p={1}>
            <Grid item xs={4}>
              <Typography textAlign="left" ml={2}>
                TAPIOCA
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Tapioca</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={tapioca}
                  label="Tapioca"
                  onChange={handleChangeCup}
                >
                  <MenuItem value={10}>Matcha</MenuItem>
                  <MenuItem value={20}>Darjeeling</MenuItem>
                  <MenuItem value={30}>Black The</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={4}>
              <Typography textAlign="left" ml={2}>
                SIZE
              </Typography>
            </Grid>
            <Grid item xs={1} justifyContent="center" />

            <Grid item xs={6} justifyContent="center">
              <Slider
                fullWidth
                aria-label="Restricted values"
                defaultValue={0}
                getAriaValueText={valuetext}
                step={null}
                valueLabelDisplay="auto"
                marks={marks}
              />
            </Grid>
            <Grid item xs={1} justifyContent="center" />
          </Grid>
        </Paper>
      </Grid>
    </Box>
  );
};

export default Generator;
