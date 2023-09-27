import { BottomNavigation,BottomNavigationAction,Paper } from "@mui/material";
import { useEffect } from "react";
import { Home, Person, Logout, Leaderboard } from "@mui/icons-material";
import React, { useContext } from 'react';
import { AuthContext } from '../../App'; // Replace with your actual import
import { getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { AuthContextType } from '../../App'; // Replace with your actual import
import { useLocation } from 'react-router-dom';



export const NavBar= ()=> { 
    const location = useLocation();
    const [value, setValue] = React.useState(location.pathname);
    const authContext = useContext(AuthContext);
    const currentUser = authContext ? authContext.currentUser : null;
    const { refetchUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const auth = getAuth();

    const logout = () => {
      auth.signOut().then(() => {
        // Navigate back to home screen after successful logout
        navigate('/');
        refetchUser(); // Call the function to refetch user
      }).catch((error) => {
        // Handle any errors here
        console.error(error);
      });
    };
    return (
      <>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Home" value="/dashboard" icon={<Home />} onClick={() => navigate('/dashboard')}/>
            <BottomNavigationAction label="Leaderboard" value="/leaderboard" icon={<Leaderboard />} onClick={() => navigate('/leaderboard')} />
            <BottomNavigationAction label="Logout" value="/logout" icon={<Logout />} onClick={logout} />
          </BottomNavigation>
        </Paper>
      </>
    )
}

