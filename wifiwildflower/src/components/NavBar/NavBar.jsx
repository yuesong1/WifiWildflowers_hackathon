import { BottomNavigation,BottomNavigationAction,Paper } from "@mui/material";
import { useEffect } from "react";
import { Home, Person, Logout } from "@mui/icons-material";
import React, { useContext } from 'react';
import { AuthContext } from '../../App'; // Replace with your actual import
import { getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { AuthContextType } from '../../App'; // Replace with your actual import

export const NavBar= ()=> { 
    const [value, setValue] = React.useState(0);

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
          <BottomNavigationAction label="Home" icon={<Home />} />
          <BottomNavigationAction label="User" icon={<Person />} />
          <BottomNavigationAction label="Logout" icon={<Logout />} onClick={logout} />

        </BottomNavigation>
      </Paper>
    </>
  )
}

