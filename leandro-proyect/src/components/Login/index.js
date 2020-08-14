import React from "react";
import "./styles.css";
import { Paper, Typography, FormControl, TextField, Button, Box, Divider } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const Login = (props) => {
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
          <LockOutlinedIcon color="secondary" fontSize="large" />
          <Typography variant="h4" gutterBottom>
            Ingresar
          </Typography>
          <FormControl className="content-form">
            <TextField
              id="outlined-basic"
              label="Correo electrónico"
              variant="outlined"
              margin="normal"
              value={props.mailValue}
              onChange={props.mailChange}
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="Contraseña"
              variant="outlined"
              margin="normal"
              value={props.passValue}
              onChange={props.passChange}
              fullWidth
            />
            <Button variant="contained" color="secondary" size="large">
              COMENZAR A CREAR PLAYLIST
            </Button>
            <Box>
              <Typography variant="subtitle1" gutterBottom>
                ¿HAS OLVIDADO LA CONTRASEÑA?
              </Typography>
            </Box>
            <Divider />
            <Box>
              <Typography variant="subtitle1" gutterBottom>
                ¿NO TIENES CUENTA?
              </Typography>
            </Box>
            <Box>
              <Button
                  className="btn-register"
                  variant="outlined"
                  color="secondary"
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

export default Login;
