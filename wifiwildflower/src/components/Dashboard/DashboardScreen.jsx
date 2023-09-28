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
import TransportCard from './TransportCard';

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
      <Grid container component="main" maxWidth="xs" spacing={4} justify="space-around" 
        sx={{justifyContent: "center", display:"flex", marginLeft:0, padding:0, width:"100vw", marginTop:"10px", marginBottom:"20vh",
        flexDirection:"column", alignItems:"center"}}>
        <CssBaseline />
        
          <Grid sx={{padding:"20px", cursor: "pointer" }}>
            <UserCard/>
          </Grid>
          <Grid sx={{padding:"20px", cursor: "pointer"}}>
            <EventCard/>
          </Grid>
          <Grid sx={{padding:"20px", cursor: "pointer"}}>
            <TransportCard/>
          </Grid>
          <Button variant="contained" color="primary" style={{borderRadius: "50%", opacity: "0.5", width: "150px", height: "150px", marginTop: "40px"}} onClick={() => alert("coming soon")}>
        Sponsor a Challenge
      </Button>
        
      </Grid>
      <NavBar/>
      
    </ThemeProvider>
  );
}