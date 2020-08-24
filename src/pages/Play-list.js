import React, {useState} from "react";
import Error from "../components/ErrorMessage"
import TableList from "../components/Table";
import { Box, Container } from "@material-ui/core";
import { useParams } from "react-router-dom";
import songData from "../base-de-datos/songData.json";

const PlaylistPage = () => {
  const [inputValue, setInput] = useState();
  const [song, setSong] = useState([]);
  const [myPlaylist, setMyPlayList] = useState([]);
  const { uuid } = useParams();

  const getSearchValue = (e) => {
    setInput(e.target.value);
  }

  const filterSong = (song) => {
    if (song.name.includes(inputValue)) {
      return true ;
    } else {
      return false;
    }
  };


  const inputKeyPress = (e) => {
    if (e.key === "Enter") {
      const songs = songData.filter(filterSong);
      setSong(songs);
    }
  }

  const addToList = (e, id) => {
    const listId = myPlaylist.map(tema => tema.uuid);
    if(listId.includes(id)) {
      alert("La cancion ya esta agregada")
    } else {
      const newSong = songData.filter(
          (song) => {
          if (song.uuid === id) {
            return true ;
          } else {
            return false;
          }
        }
      );
      const songCount = newSong.map(
        (song) => {
          return {...song, count: 0}
        }
      )
      const newPlaylist = myPlaylist.concat(songCount);
      setMyPlayList(newPlaylist);
      console.log(newPlaylist)
    }
  }

  const iconSum = () => {
    const songVote = myPlaylist.map(song => {
      return (song.count + 1);
    })
  }

  const iconRest = () => {
    
  }

  return (
    <Box>
      <Container maxWidth="lg">
          {uuid && <TableList value={inputValue} onChange={getSearchValue} inputKeyPress={inputKeyPress} song={song} addToList={addToList} myPlaylist={myPlaylist} iconSum={iconSum} iconRest={iconRest} />}
          {!uuid && <Error />}
      </Container>
    </Box>
  );
};

export default PlaylistPage;
