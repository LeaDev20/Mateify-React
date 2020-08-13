import React from "react";
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import './styles.css'

const Head = () => {
  return (
    <Box>
      <AppBar position="static" color="secondary">
        <Toolbar variant="regular" className="items-position">
          <Typography variant="h6" color="inherit" align="center">
            Mateify
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Head;
