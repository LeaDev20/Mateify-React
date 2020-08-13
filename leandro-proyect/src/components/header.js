import React from "react";
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import '../styles/header.css'

const Head = () => {
  return (
    <div>
      <AppBar position="static" color="secondary">
        <Toolbar variant="regular" className="items-position">
          <Typography variant="h6" color="inherit" align="center">
            Mateify
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Head;
