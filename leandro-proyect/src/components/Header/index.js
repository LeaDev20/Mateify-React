import React from "react";
import logo from "../../images/Logo.png";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import "./styles.css";

const Head = () => {
  return (
    <Box>
      <AppBar position="static" color="secondary">
        <Toolbar variant="regular" className="items-position">
          <Box>
            <img src={logo} alt="logo" className="img-logo" />
          </Box>
          <Typography variant="h6" color="inherit" align="center">
            Mateify
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Head;
