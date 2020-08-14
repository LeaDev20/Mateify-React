import React from "react";
import "./styles.css";
import { Paper, Typography, Grid, Box } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const Error = () => {
  return (
    <Box width={700} mt={25} ml="auto" mb={25} mr="auto">
      <Paper variant="outlined" elevation={3}>
        <Box pt={19} pb={19}>
          <Grid container alignItems="center">
            <Grid item align="center" xs={4}>
              <LockOutlinedIcon color="secondary" fontSize="large" />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h4">
                <b>Mmm... algo no salió bien</b>
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                <b>Debes estar autenticado para acceder a esta página</b>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default Error;
