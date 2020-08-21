import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Typography, Paper, InputBase, IconButton, Button, Avatar } from "@material-ui/core";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import "./styles.css";

const TableList = (props) => {
  const cancion = props.song
  const playlist = props.myPlaylist;
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
                  {cancion.length === 1 && (
                    <TableRow>
                      <TableCell align="left" padding="none">{cancion.map(s => {
                        return (
                          <Box>
                            <Avatar src={s.artist.coverUrl} />
                            {s.name}
                          </Box>
                        )
                      })}
                      </TableCell>
                      <TableCell align="right">{cancion.map(s => {
                        return s.artist.name
                      })} </TableCell>
                      <TableCell align="right">{cancion.map(s => {
                        return s.album
                      })} </TableCell>
                      <TableCell align="right">{cancion.map(s => {
                        return s.duration
                      })} </TableCell>
                      <TableCell align="right" padding="none"><Button onClick={props.addToList} >Add</Button></TableCell>
                    </TableRow>
                  )}
                  {cancion.length === 0 && (
                    <TableRow>
                      <Typography align="center">No hay resultados: utiliza la barra de busqueda para encontrar canciones</Typography>
                    </TableRow>
                  )}
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
                      <Paper variant="outlined">
                        <Typography variant="body1">
                          UPS!, TU PLAYLIST AUN ESTA VACIA
                        </Typography>
                        <Typography variant="body1">
                          Comienza a agregar canciones
                        </Typography>
                      </Paper>
                    </TableRow>
                  )}
                  {playlist.length === 1 && (
                    <TableRow>
                      <TableCell align="left" padding="none">{playlist.map(s => {
                        return <Avatar src={s.artist.coverUrl} />
                      })}
                      </TableCell>
                      <TableCell align="right">{playlist.map(s => {
                        return s.artist.name
                      })} </TableCell>
                      <TableCell align="right">{playlist.map(s => {
                        return s.duration
                      })} </TableCell>
                      <TableCell align="right">{playlist.map(s => {
                        return "votos"
                      })} 
                      </TableCell>
                      <TableCell align="right">{playlist.map(s => {
                        return (
                          <Box>
                            <ThumbUpAltIcon />, 
                            <ThumbDownIcon />
                          </Box>
                        )
                      })} 
                      </TableCell>
                    </TableRow>
                  )}
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
