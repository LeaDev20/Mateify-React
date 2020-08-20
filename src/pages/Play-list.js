import React, {useState} from "react";
import Error from "../components/ErrorMessage"
import TableList from "../components/Table";
import { Box, Container } from "@material-ui/core";
import { useParams } from "react-router-dom";
import songData from "../base-de-datos/songData.json";

const PlaylistPage = () => {
  const [inputValue, setInput] = useState();
  const [song, setSong] = useState([]);
  const { uuid } = useParams();

  const getSearchValue = (e) => {
    setInput(e.target.value);
    console.log(inputValue);
  }

  const filterSong = (song) => {
    if (song.name === inputValue) {
      return true ;
    } else {
      return false;
    }
  };

  const inputKeyPress = (e) => {
    if (e.key === "Enter") {
      const songs = songData.filter(filterSong);
      setSong(songs);
      console.log(song);
    }
  }

  return (
    <Box>
      <Container maxWidth="lg">
          {uuid && <TableList value={inputValue} onChange={getSearchValue} inputKeyPress={inputKeyPress} />}
          {!uuid && <Error />}
      </Container>
    </Box>
  );
};

export default PlaylistPage;
