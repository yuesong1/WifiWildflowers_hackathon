import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { GoogleMapCard } from './GoogleMapCard';
import { Button, Container, Grid, Typography } from '@mui/material';
import { NavBar } from '../NavBar/NavBar';

const currentPosition={
    latitute:-37.79976696090261,
    longitude:144.9648329121283

}
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    console.log("Geolocation not supported");
  }
  
function success(position) {
    currentPosition.latitude = parseFloat(position.coords.latitude);
    currentPosition.longitude =parseFloat(position.coords.longitude);
console.log(`Latitude: ${currentPosition.latitude}, Longitude: ${currentPosition.longitude}`);
}
  
function error() {
console.log("Unable to retrieve your location");
}

const LocationScreen = props => {
    const [mapObject, setMapObject] = useState(null);
    return (

    < >
    <NavBar/>
    <Grid container sx={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
   
        <Typography variant='h3'>
        St.Kilda Beach Event
        </Typography>
  
          Your current locaiton is : {currentPosition.latitute}+{currentPosition.longitude}
 
        <GoogleMapCard height="500px" lat={Number(currentPosition.latitude)} lng={Number(currentPosition.longitude)}/>
  
  
        <Button variant="contained">Join Event</Button>
    

    </Grid>

    </>

  )
}

export default LocationScreen
