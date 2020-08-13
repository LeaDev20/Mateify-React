import React from 'react';
import '../styles/login.css'
import { Container, Paper, Typography, FormControl, TextField, Button, ButtonBase, Box, Divider } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Login = () => {
    return (
        <div className="content">
            <Container maxWidth="md">
                <Paper variant="outlined" elevation={3}>
                    <div className="content-paper">
                        <LockOutlinedIcon color="secondary" fontSize="large" />
                        <Typography variant="h4" gutterBottom>
                            Ingresar
                        </Typography>
                        <FormControl className="content-form">
                            <TextField id="outlined-basic" label="Correo electrónico" variant="outlined" margin="normal" fullWidth />
                            <TextField id="outlined-basic" label="Contraseña" variant="outlined" margin="normal" fullWidth />
                            <Button variant="contained" color="secondary" size="large">
                                COMENZAR A CREAR PLAYLIST
                            </Button>
                            <Box>
                                <Typography variant="subtitle1" gutterBottom>
                                    ¿HAS OLVIDADO LA CONTRASEÑA?
                                </Typography>
                            </Box>
                            <Divider />
                            <Box>
                                <Typography variant="subtitle1" gutterBottom>
                                    ¿NO TIENES CUENTA?
                                </Typography>
                            </Box>
                            <ButtonBase>
                                <Button className="btn-register" variant="outlined" color="secondary" size="large">
                                    REGISTRATE
                                </Button>
                            </ButtonBase>
                        </FormControl>
                    </div>
                </Paper>
            </Container>
        </div>
    )
}

export default Login;