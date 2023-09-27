import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { GoogleMapCard } from './GoogleMapCard';
import { Button, Container } from '@mui/material';
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
    <Container sx={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
      Your current locaiton is : {currentPosition.latitute}+{currentPosition.longitude}
      {/* <LocatorButton mapObject={mapObject} /> */}
      {/* <Map setMapObject={setMapObject} /> */}
      <GoogleMapCard height="500px" lat={Number(currentPosition.latitude)} lng={Number(currentPosition.longitude)}/>
      <Button variant="contained">Join Event</Button>
    </Container>

    </>

  )
}

export default LocationScreen
