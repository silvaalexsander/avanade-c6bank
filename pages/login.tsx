import React from 'react';
import {
    Container,
    CssBaseline,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../components/utils/Copyright';
import Login from '../components/Form/Login';
//@mui/material

const theme = createTheme();

export default function LoginPage(){

   return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                  <Login/>
                <Copyright site="avanade"/>
            </Container>
        </ThemeProvider>
    )
}