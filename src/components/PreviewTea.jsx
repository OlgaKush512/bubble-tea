import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const PreviewTea = () => {
  return (
    <>
      <Box justifyContent="center">
        <Paper
          sx={{
            height: '60vh',
            borderRadius: '16px 4px 4px 4px ',
          }}
          elevation={0}
        >
          <Box>The</Box>
          <Box>
            <Typography>Name</Typography>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default PreviewTea;
