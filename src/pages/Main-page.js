import React, { useState } from "react";
import Login from "../components/Login";
import Head from "../components/Header";
import Error from "../components/ErrorMessage";
import TableList from "../components/Table";
import { Box, Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import userData from "../base-de-datos/userData.json";
import songData from "../base-de-datos/songData.json";

const MainPage = () => {
  const [mail, setMail] = useState();
  const [pass, setPass] = useState();
  const [ref, setRef] = useState("error");

  const getMailValue = (e) => {
    setMail(e.target.value);
  };

  const getPassValue = (e) => {
    setPass(e.target.value);
  };

  const checkUser = (element) => {
    if(element.email === mail && element.password === pass) {
      return true;
    }
  }

  const usuario = userData.filter(checkUser);

  const navPage = () => {
    if(usuario === true){
      return setRef("play-list")
    }
  }
  
  const avatarImg = usuario.map(u => {
    return(
      u.profilePictureUrl
    )
  })

  return (
    <Box>
      <Head avatar={avatarImg} />
      <Router>
        <Switch>
          <Route path="/play-list">
            <Container maxWidth="lg">
              <TableList />
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
                refValue={ref}
                click={navPage}
              />
            </Container>
          </Route>
        </Switch>
      </Router>
    </Box>
  );
};

export default MainPage;
