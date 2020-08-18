import React from "react";
import logo from "../../images/Logo.png";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import "./styles.css";

const Head = (props) => {
  return (
    <Box>
      <AppBar position="static" color="secondary">
        <Toolbar variant="regular" className={props.class}>
          <Box>
            <img src={logo} alt="logo" className="img-logo" />
          </Box>
          <Box>
            <Typography variant="h6" color="inherit" align="center">
              Mateify
            </Typography>
          </Box>
          <Box mx="20px">
            <Avatar src={props.avatar} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Head;
