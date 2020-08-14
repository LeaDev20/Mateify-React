import React, { useState } from "react";
import Login from "../components/Login";
import Head from "../components/Header";
import Error from "../components/ErrorMessage";
import Search from "../components/Search" 
import { Box, Container } from "@material-ui/core";
import userData from "../base-de-datos/userData.json";
import songData from "../base-de-datos/songData.json";

const MainPage = () => {

  const [mail, setMail] = useState();
  const [pass, setPass] = useState();

  const getMailValue = (e) => {
    setMail(e.target.value)
  }

  const getPassValue = (e) => {
    setPass(e.target.value)
  }

  return (
    <Box>
      <Head />
      <Container maxWidth="md">
        <Search />
      </Container>
      <Container maxWidth="md">
        <Login mailValue={mail} mailChange={getMailValue} passValue={pass} passChange={getPassValue} />
      </Container>
      <Container maxWidth="md">
        <Error />
      </Container>
    </Box>
  );
};

export default MainPage;
