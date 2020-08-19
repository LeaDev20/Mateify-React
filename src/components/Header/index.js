import React from "react";
import logo from "../../images/Logo.png";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import "./styles.css";
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";

const Head = (props) => {
  const [classValue, setClassValue] = useState("items-center");
  const location = useLocation();

  return (
    <Box>
      <AppBar position="static" color="secondary">
        <Toolbar variant="regular" className={classValue}>
          <Box>
            <img src={logo} alt="logo" className="img-logo" />
          </Box>
          <Box>
            <Typography variant="h6" color="inherit" align="center">
              Mateify
            </Typography>
          </Box>
          {classValue === "items-space" && (
            <Box mx="20px">
              <Avatar src={props.avatar} />
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Head;
