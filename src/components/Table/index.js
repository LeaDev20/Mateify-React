import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Typography, Paper, InputBase, IconButton, Button, Avatar } from "@material-ui/core";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import AddIcon from "@material-ui/icons/Add";
import { pink } from "@material-ui/core/colors";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500]
  }
}))

const TableList = (props) => {
  const cancion = props.song
  const playlist = props.myPlaylist;
  const classes = useStyles();
  return (
    <Box>
      <Box width={600} mx="auto" my={3}>
        <Paper variant="outlined">
          <IconButton type="submit" aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase placeholder="Buscar" value={props.value} onChange={props.onChange} onKeyPress={props.inputKeyPress} />
        </Paper>
      </Box>
      <Box mb={3}>
        <TableContainer>
          <Paper variant="outlined">
            <Box px="100px" py="15px">
              <Typography variant="h6">
                Resultados
              </Typography>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left" padding="none">Nombre</TableCell>
                    <TableCell align="right">Artista</TableCell>
                    <TableCell align="right">Álbum</TableCell>
                    <TableCell align="right">Duración</TableCell>
                    <TableCell align="right" padding="none">Agregar</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cancion.length === 0 && (
                    <TableRow>
                      <Box py={1} textAlign="end">
                        <Typography>No hay resultados: utiliza la barra de busqueda para encontrar canciones</Typography>
                      </Box>
                    </TableRow>
                  )}
                  {cancion.map(song => (
                    <TableRow>
                      <TableCell align="left" padding="none" >
                          <Box display="flex" flexDirection="row" justifyContent="start" alignItems="center">
                            <Avatar src={song.artist.coverUrl} />
                            {song.name}
                          </Box>
                      </TableCell>
                      <TableCell align="right">{song.artist.name}</TableCell>
                      <TableCell align="right">{song.album}</TableCell>
                      <TableCell align="right">{song.duration}</TableCell>
                      <TableCell align="right" padding="none">
                        <Box align="right" >
                          <Avatar className={classes.icon}>
                            <AddIcon onClick={(e) => props.addToList(e, song.uuid)} >Add</AddIcon>
                          </Avatar>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Paper>
        </TableContainer>
      </Box>
      <Box>
        <TableContainer>
          <Paper variant="outlined">
            <Box px="100px" py="15px">
              <Typography variant="h6">
                Tu Playlist
              </Typography>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left" padding="none">Nombre</TableCell>
                    <TableCell align="right">Artista</TableCell>
                    <TableCell align="right">Duración</TableCell>
                    <TableCell align="right">Cant.Votos</TableCell>
                    <TableCell align="right" padding="none">Votar</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {playlist.length === 0 && (
                    <TableRow>
                      <Box ml={43} py={10}>
                        <Paper variant="outlined" >
                          <Box p={4}>
                            <Typography variant="body1" align="center">
                              UPS!, TU PLAYLIST AUN ESTA VACIA
                            </Typography>
                            <Typography variant="body1" align="center">
                              Comienza a agregar canciones
                            </Typography>
                          </Box>
                        </Paper>
                      </Box>
                    </TableRow>
                  )}
                  {playlist.map(song => (
                    <TableRow>
                      <TableCell align="left" padding="none">
                          <Box display="flex" flexDirection="row" justifyContent="start" alignItems="center">
                            <Avatar src={song.artist.coverUrl} />
                            {song.name}
                          </Box>
                      </TableCell>
                      <TableCell align="right">{song.artist.name}</TableCell>
                      <TableCell align="right">{song.duration}</TableCell>
                      <TableCell align="right">{song.count}</TableCell>
                      <TableCell align="right" padding="none">
                        <Box>
                          <ThumbUpAltIcon onClick={(e) => props.iconSum(e, song.uuid)} /> 
                          <ThumbDownIcon onClick={(e) => props.iconRest(e, song.uuid)} />
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Paper>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default TableList;
