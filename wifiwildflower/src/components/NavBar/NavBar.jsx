import React from "react"
import { BottomNavigation,BottomNavigationAction,Paper } from "@mui/material";
import { useEffect } from "react";
import { Home, Person } from "@mui/icons-material";

export const NavBar= ()=> { 
    const [value, setValue] = React.useState(0);
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

        </BottomNavigation>
      </Paper>
    </>
  )
}

