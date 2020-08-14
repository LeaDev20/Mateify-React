import React from 'react'
import './styles.css'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Box } from '@material-ui/core';


const Search = () => {
    return (
        <Box 
            width={600} 
            mx="auto"
            my={3}
        >
            <Paper >
                <IconButton type="submit" aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    placeholder="Buscar"
                />
            </Paper>
        </Box>
    );
}

export default Search;