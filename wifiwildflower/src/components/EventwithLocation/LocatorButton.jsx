import React from 'react'

import PropTypes from 'prop-types';
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
    return (
      <button
        onClick={getUserLocation}  
        type="button"
      >
       
      </button>
    );
  };
LocatorButton.propTypes = {
  mapObject: PropTypes.object,
};
export default LocatorButton;