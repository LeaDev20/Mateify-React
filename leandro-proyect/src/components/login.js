import React from "react";
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import '../styles/login.css'


const Login = () => {
  return (
      <AppBar position="static" color="secondary">
        <Toolbar variant="regular" className="items-position">
          <Typography variant="h6" color="inherit" align="center">
            Mateify
          </Typography>
        </Toolbar>
      </AppBar>
  );
};

export default Login;
