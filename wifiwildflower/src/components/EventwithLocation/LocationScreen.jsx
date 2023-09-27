import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Map from './Map';
import LocatorButton from './LocatorButton';
const currentPosition={
    latitute:"",
    longitude:""
}
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    console.log("Geolocation not supported");
  }
  
function success(position) {
    currentPosition.latitude = position.coords.latitude;
    currentPosition.longitude = position.coords.longitude;
console.log(`Latitude: ${currentPosition.latitude}, Longitude: ${currentPosition.longitude}`);
}
  
function error() {
console.log("Unable to retrieve your location");
}

const LocationScreen = props => {
    const [mapObject, setMapObject] = useState(null);


    
  
    return (
    <div>
      Your current locaiton is : {currentPosition.latitute}+{currentPosition.longitude}
      <LocatorButton mapObject={mapObject} />
      <Map setMapObject={setMapObject} />
    </div>
  )
}

export default LocationScreen
