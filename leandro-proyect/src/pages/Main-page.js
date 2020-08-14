import React, { useState } from "react";
import Login from "../components/Login";
import Head from "../components/Header";
import Error from "../components/ErrorMessage";
import Table from "../components/Table";
import { Box, Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import userData from "../base-de-datos/userData.json";
import songData from "../base-de-datos/songData.json";

const MainPage = () => {
  const [mail, setMail] = useState();
  const [pass, setPass] = useState();

  const getMailValue = (e) => {
    setMail(e.target.value);
  };

  const getPassValue = (e) => {
    setPass(e.target.value);
  };

  const showMessage = () => {
    alert("Correo: " + mail);
    alert("Contraseña: " + pass);
  };

  return (
    <Box>
      <Head />
      <Router>
        <Switch>
          <Route path="/play-list">
            <Container maxWidth="md">
              <Table />
            </Container>
          </Route>
          <Route path="/error">
            <Container maxWidth="md">
              <Error />
            </Container>
          </Route>
          <Route path="/">
            <Container maxWidth="md">
              <Login
                mailValue={mail}
                mailChange={getMailValue}
                passValue={pass}
                passChange={getPassValue}
                click={showMessage}
              />
            </Container>
          </Route>
        </Switch>
      </Router>
    </Box>
  );
};

export default MainPage;
