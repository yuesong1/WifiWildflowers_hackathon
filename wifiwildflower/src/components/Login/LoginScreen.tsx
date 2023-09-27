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
import { getDatabase, ref as dbRef , onValue, set } from "firebase/database";
import { getAuth, signInAnonymously } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../App';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function LoginScreen() {
  const authContext = React.useContext(AuthContext);
  const refetchUser = authContext?.refetchUser;
  const navigate = useNavigate();
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const data = new FormData(event.currentTarget);
      const name = data.get('name');
      const auth = getAuth();
      const userCredential = await signInAnonymously(auth);
      const user = userCredential.user;
  
      const db = getDatabase();
      const userRef = dbRef(db, 'users/' + user.uid);
  
      await set(userRef, {
        username: name,
      }).then(() => {
        // Call the function to refetch user
        refetchUser && refetchUser();
      });
  
      navigate('/dashboard'); // Uncomment this if you have a navigate function
    } catch (error) {
      if (error instanceof Error) {
        // setError(error.message); // Uncomment this if you have a setError function
      }
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Typography component="h1" variant="h5">
            Welcome
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Anon Log In 
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}