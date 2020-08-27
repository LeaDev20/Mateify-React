import React from "react";
import "./styles.css";
import {
  Paper,
  Typography,
  FormControl,
  TextField,
  Button,
  Box,
  Divider,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { pink } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    width: "55px",
    height: "55px",
    top: "10px",
    margin: "15px",
  }
}))

const Form = (props) => {
  const classes = useStyles();
  return (
    <Box my="30px">
      <Paper variant="outlined" elevation={3}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          py="30px"
        >
          <Box my="10px">
            <Avatar className={classes.icon} >
              <LockOutlinedIcon fontSize="large" />
            </Avatar>
          </Box>
          <Typography variant="h4" gutterBottom>
            Ingresar
          </Typography>
          <FormControl className="content-form">
            <TextField
              id="correo"
              label="Correo electrónico"
              variant="outlined"
              margin="normal"
              value={props.mailValue}
              onChange={props.mailChange}
              fullWidth
            />
            <TextField
              id="contraseña"
              label="Contraseña"
              variant="outlined"
              type="password"
              margin="normal"
              value={props.passValue}
              onChange={props.passChange}
              fullWidth
            />
            <Box my="20px">
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={props.click}
                fullWidth
              >
                COMENZAR A CREAR PLAYLIST
              </Button>
            </Box>
            <Box mb="20px">
              <Typography variant="subtitle1" color="primary" gutterBottom>
                ¿HAS OLVIDADO LA CONTRASEÑA?
              </Typography>
            </Box>
            <Divider />
            <Box mt="30px">
              <Typography variant="subtitle1" color="error">¿NO TIENES CUENTA?</Typography>
            </Box>
            <Box my="10px">
              <Button
                className="btn-register"
                variant="outlined"
                color="primary"
                size="large"
              >
                REGISTRATE
              </Button>
            </Box>
          </FormControl>
        </Box>
      </Paper>
    </Box>
  );
};

export default Form;
