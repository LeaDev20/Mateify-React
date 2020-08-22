import React, { useState } from "react";
import Form from "../components/Login";
import { Box, Container, Snackbar } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Alert from '@material-ui/lab/Alert';
import userData from "../base-de-datos/userData.json";

const LoginPage = () => {
  const [mail, setMail] = useState();
  const [pass, setPass] = useState();
  const [open, setOpen] = useState(false);
  const history = useHistory();
  
  const getMailValue = (e) => {
    setMail(e.target.value);
  };

  const getPassValue = (e) => {
    setPass(e.target.value);
  };

  const checkUser = (element) => {
    if (element.email === mail && element.password === pass) {
      return true;
    }
    return false;
  };

  const navPage = () => {
    const usuario = userData.filter(checkUser);
    if (usuario.length > 0) {
      return history.push("/playlist/" + usuario[0].uuid);
    } else {
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Box>
      <Container maxWidth="md">
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            Usuario o contraseña incorrecto.
          </Alert>
        </Snackbar>
        <Form
          mailValue={mail}
          mailChange={getMailValue}
          passValue={pass}
          passChange={getPassValue}
          click={navPage}
        />
      </Container>
    </Box>
  );
};

export default LoginPage;
