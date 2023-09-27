import React from 'react'

import PropTypes from 'prop-types';
import { useRef } from 'react';
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
const LocatorButton = ({mapObject}) => {
    
    const getUserLocation = () => { 
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const userLocation = {            
                    lat: position.coords.latitude,  
                    lng: position.coords.longitude, 
                  };       
                mapObject.setCenter(userLocation); 
            });
                                          
        } else {
          // code for legacy browsers
        }
          
    }; 


    const marker = useRef(null);   // ADDED
    if (marker.current) {          // REVISED
        marker.current.setMap(null); // REVISED
    }
    marker.current = new google.maps.Marker({ // REVISED
      icon: blueDot,
      position: userLocation,
      title: 'You are here!'
    });
    marker.current.setMap(mapObject); // REVISED

    return (
      <button
        onClick={getUserLocation}  
        type="button"
      >
       Get Location
      </button>
    );
  };
LocatorButton.propTypes = {
  mapObject: PropTypes.object,
};
export default LocatorButton;