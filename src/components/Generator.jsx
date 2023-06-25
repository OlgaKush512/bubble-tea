import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import CupChoice from "./choices/CupChoice";
import TeaChoice from "./choices/TeaChoice";
import TapiocaChoice from "./choices/TapiocaChoice";
import SizeChoice from "./choices/SizeChoice";
import NameChoice from "./choices/NameChoice";
import FontChoice from "./choices/FontChoice";

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
          <TeaChoice />
          <TapiocaChoice />
          <SizeChoice />
        </Paper>
      </Grid>
    </Box>
  );
};

export default Generator;
