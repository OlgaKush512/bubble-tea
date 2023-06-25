import { Container, Grid, Paper } from "@mui/material";
import React from "react";
import Generator from "./Generator";
import Ingredients from "./Ingredients";
import PreviewTea from "./PreviewTea";

const MainEcran = () => {
  return (
    <Container sx={{ minWidth: "90vw" }}>
      <Paper sx={{ borderRadius: "16px", mt: 10 }}>
        <Grid
          container
          columns={10}
          justifyContent="center"
          spacing={1}
          sx={{ pl: "10px", pr: "10px", pb: "10px", pt: "2px" }}
        >
          <Grid item xs={10} lg={8}>
            <PreviewTea />
            <Ingredients />
          </Grid>
          <Grid item xs={10} lg={2}>
            <Generator />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default MainEcran;
