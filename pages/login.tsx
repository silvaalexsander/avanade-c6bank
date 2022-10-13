import React, { FormEvent, useState } from "react"
import {Typography, 
    Container, 
    Button, 
    Avatar, 
    TextField, 
    Checkbox, 
    Grid, 
    Box, 
    CssBaseline} from '@mui/material';
import Link from "next/link";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControlLabel from "@mui/material/FormControlLabel";

//pagina é a função de varios componentes
//@mui/material é um pacote de componentes

type CopyProps = {
    site?: string;
}

const theme = createTheme();

function CopyRight(props: CopyProps) {
    return(
        <Typography>
            {'Copyright © '}
            <Link color="inherit" href={`https://www.${props.site}.com`}>
            {props.site}
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}
export default function LoginPage(){
const [password, setPassoword] = useState<string | undefined | null | FormDataEntryValue>('')
const [error, setError] = useState<string | boolean>('')
const [errorMessage, setErrorMessage] = useState<string>('')

    
const handleSubmit = (event: FormEvent<HTMLFormElement>) =>{
    //pare tudoooo
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    setPassoword(data.get('password'))
    if(password && password?.length < 9){
        setError(true)
        setErrorMessage('Senha deve ter no mínimo 9 caracteres')
    }
    console.log({
        email: data.get('email'),
        password: data.get('password'),
    });
}    

    return(
       <ThemeProvider theme={theme}>
        <Container component='main' maxWidth='xs'>
            <CssBaseline/>
            <Box sx={{mt:8, 
                display:'flex', 
                flexDirection:'column', 
                alignItems:'center'}}>
                <Typography component='h1' variant='h5'>
                    {`Tela de login`}
                </Typography>
                <Box component='form' onSubmit={handleSubmit} sx={{m1:1}}>
                    <TextField margin="normal" autoComplete="email" required id='email' name='email' fullWidth label='Digite o login' variant="outlined"/>
                    <TextField margin="normal" autoComplete="current-password" required id='password' name="password" fullWidth type='password' label='Digite a senha' />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary"/>}
                        label="Lembrar-me"
                    />
                  
                    <Button type='submit' fullWidth variant='contained' sx={{mt:3, mb:2}}>
                        {`Entrar`}
                    </Button>
                    {(error && <Typography color='error'>{errorMessage}</Typography>)}
                </Box>
            </Box>
            <CopyRight site="avanade"/>

        </Container>
       </ThemeProvider>
    )
}

