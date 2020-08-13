import React, { useState } from "react";
import Login from "../components/Login";
import Head from "../components/Header";
import Error from "../components/ErrorMessage";
import { Box, Container } from "@material-ui/core";

const MainPage = () => {

  const [mail, setMail] = useState();
  const [pass, setPass] = useState();

  const getMailValue = (e) => {
    setMail(e.target.value)
  }

  const getPasValue = (e) => {
    setPass(e.target.value)
  }

  console.log(mail)
  return (
    <Box>
      <Head />
      <Container maxWidth="md">
        <Login mailValue={mail} passValue={pass} />
      </Container>
      <Container maxWidth="md">
        <Error />
      </Container>
    </Box>
  );
};

export default MainPage;
