import React from "react";
import "../styles/error.css"
import { Container, Paper, Typography, Grid } from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Error = () => {
    return (
        <Container maxWidth="false">
            <div className="contenedor-paper">
                <Paper variant="outlined" elevation={3}>
                    <Grid container alignItems="center">
                        <Grid item align="center" xs={4}>
                            <LockOutlinedIcon color="secondary" fontSize="large" />
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="h4">
                                <b>Mmm... algo no salió bien</b>
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                <b>Debes estar autenticado para acceder a esta página</b>
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </Container>
    )
}

export default Error;