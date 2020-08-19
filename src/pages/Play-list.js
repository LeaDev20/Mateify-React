import React from "react";
import Error from "../components/ErrorMessage"
import TableList from "../components/Table";
import { Box, Container } from "@material-ui/core";
import { useParams } from "react-router-dom";
import songData from "../base-de-datos/songData.json";

const PlaylistPage = () => {
  const { uuid } = useParams();

  const checkSong = (song) => {
    if (song.uuid === uuid) {
      return true;
    }
    return false;
  };

  const canciones = songData.filter(checkSong);
  console.log(canciones);

  return (
    <Box>
      <Container maxWidth="lg">
          {uuid && <TableList />}
          {!uuid && <Error />}
      </Container>
    </Box>
  );
};

export default PlaylistPage;
