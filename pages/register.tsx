import React from 'react';
import {
    Container,
    CssBaseline,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../components/utils/Copyright';
import Login from '../components/Form/Login';
import Register from '../components/Form/Register';
//@mui/material

const theme = createTheme();

export default function LoginPage(){

   return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                  <Register/>
                <Copyright site="avanade"/>
            </Container>
        </ThemeProvider>
    )
}