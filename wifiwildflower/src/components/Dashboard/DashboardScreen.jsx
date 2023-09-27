import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {NavBar} from "../NavBar/NavBar";
import UserCard from './UserCard';
import EventCard from './EventCard';
import RecycleCard from './RecycleCard';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function DashboardScreen() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" maxWidth="xs" spacing={4} justity="space-around" 
        sx={{justifyContent: "center", paddingTop:"50px"}}>
        <CssBaseline />
        <NavBar/>
          <Grid sx={{padding:"20px"}}>
            <UserCard/>
          </Grid>
          <Grid sx={{padding:"20px"}}>
            <EventCard/>
          </Grid>
          <Grid sx={{padding:"20px"}}>
            <RecycleCard/>
          </Grid>
        
      </Grid>
    </ThemeProvider>
  );
}