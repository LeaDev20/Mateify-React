import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Typography, Paper, InputBase, IconButton } from "@material-ui/core";
import "./styles.css";

const TableList = () => {
  return (
    <Box>
      <Box width={600} mx="auto" my={3}>
        <Paper variant="outlined">
          <IconButton type="submit" aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase placeholder="Buscar" />
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
                    <TableRow>
                      <TableCell align="left" padding="none">Titulo</TableCell>
                      <TableCell align="right">Hola</TableCell>
                      <TableCell align="right">Como</TableCell>
                      <TableCell align="right">Estas</TableCell>
                      <TableCell align="right" padding="none">Decime</TableCell>
                    </TableRow>
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
                    <TableCell align="right">Álbum</TableCell>
                    <TableCell align="right">Duración</TableCell>
                    <TableCell align="right" padding="none">Agregar</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <Box mx="auto">
                    <Paper variant="outlined">
                      <Box textAlign="center">
                        <Typography variant="body1">
                          UPS!, TU PLAYLIST AUN ESTA VACIA
                        </Typography>
                        <Typography variant="body1">
                          Comienza a agregar canciones
                        </Typography>
                      </Box>
                    </Paper>
                  </Box>
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
