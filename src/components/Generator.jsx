import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import CupChoice from "./choises/CupChoice";
import TheChoice from "./choises/TheChoice";
import TapiocaChoice from "./choises/TapiocaChoice";
import SizeChoice from "./choises/SizeChoice";
import NameChoice from "./choises/NameChoice";
import FontChoice from "./choises/FontChoice";

const Generator = () => {
  return (
    <Box>
      <Grid container justifyContent="center">
        <Paper
          sx={{
            height: { lg: "80vh", xs: "50vh" },
            width: { lg: "auto", xs: "100%" },
            borderRadius: "16px",
          }}
          elevation={0}
        >
          <Typography variant="h6" fontWeight={600} p={4}>
            Bubble Tea Generator
          </Typography>
          <NameChoice />
          <FontChoice />
          <CupChoice />
          <TheChoice />
          <TapiocaChoice />
          <SizeChoice />
        </Paper>
      </Grid>
    </Box>
  );
};

export default Generator;
