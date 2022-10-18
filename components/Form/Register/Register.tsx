import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'
import React, { FormEvent, useEffect, useState } from 'react'
import Snackbar from '../../utils/Snackbar';

export default function Login() {

    const [password, setPassword] = useState<string | undefined | null | FormDataEntryValue>('');
    const [error, setError] = useState<boolean>(false);
    const [erro2, setError2] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [open, setOpen] = useState<boolean>(false);
    const [email, setEmail] = useState<string | undefined | null>('');
    const [nome, setNome] = useState<string | undefined | null>('');
    const [confirmPassword, setConfirmPassword] = useState<string | undefined |null | FormDataEntryValue>('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>)=>{
        //pára tudo!!!
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setPassword(data.get('password'));
        setConfirmPassword(data.get('confirmPassword'));
    
    }

    useEffect(()=>{

        if(password && password.length < 6){
            setError(true);
            setErrorMessage('A senha deve ter no mínimo 6 caracteres');
        }else if(password){
            setError(false);
            setErrorMessage('Usuário cadastrado com sucesso!');
            setOpen(true);
            //chamar a API do server para validar usuários e senha.
            //se estiver tudo certo, redirecionar para a página de extrato.
            //adicionar o snackbar
            //fazer o redirect
        }
    },[password]);

    useEffect(()=>{
        if(password && password.length >= 6){
            if(confirmPassword && confirmPassword !== password){
                setError2(true);
                setOpen(false);
                setErrorMessage('As senhas não conferem');
            }else if(confirmPassword){
                setError(false);
                setError2(false);
                setOpen(true);
                setErrorMessage('Usuário cadastrado com sucesso!');
            }
        }
    },[password, confirmPassword]);
    
  return (
    
    <Box sx={{mt:8,
        display:'flex',
        flexDirection: 'column',
        alignItems:'center'
        }}>
       <Typography component="h1" variant="h5">
           {'Cadastre-se'}
       </Typography>
       <Box component="form" onSubmit={handleSubmit} sx={{mt:1}}>
        <TextField margin="normal" required id="nome" name="nome" fullWidth label="Digite o nome"  autoComplete="nome" />
        <TextField margin="normal" required id="email" name="email" fullWidth label="Insira o E-mail"  autoComplete="email" type={'email'}/>
        <TextField margin="normal" required fullWidth id="password" name="password" type="password" label="Digite a senha" autoComplete="current-password"/>
        <TextField margin="normal" required fullWidth id="confirmPassword" name="confirmPassword" type="password" label="Confirme a senha" autoComplete="current-password"/>
        <FormControlLabel control={<Checkbox value="remember" color="primary"/>}label="Lembrar-me"/>
           <Button type="submit" fullWidth variant="contained" sx={{mt:3, mb:2}}>
               {'Cadastrar'}
           </Button>

           {/* {error && <Typography color="error">{errorMessage}</Typography>} */}
           {erro2 && <Snackbar open={erro2} hide={5} message={errorMessage} severity='error'/>}
           {error && < Snackbar open={error} hide={5} message={errorMessage} severity='error'/>}
           {open && <Snackbar open={open} hide={5} message={errorMessage} severity="success"/>}

        </Box>
   </Box>
  )
}
