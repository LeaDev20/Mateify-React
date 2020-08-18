import React, { useState } from "react";
import Head from "../components/Header";
import Error from "../components/ErrorMessage"
import TableList from "../components/Table";
import { Box, Container } from "@material-ui/core";
import { useParams } from "react-router-dom";
import songData from "../base-de-datos/songData.json";
import userData from "../base-de-datos/userData.json";

const PlaylistPage = () => {
  const [avatar, setAvatar] = useState();
  const { uuid } = useParams();

  return (
    <Box>
      <Head class={"items-space"} avatar={avatar} />
      <Container maxWidth="lg">
          {uuid && <TableList />}
          {!uuid && <Error />}
      </Container>
    </Box>
  );
};

export default PlaylistPage;
