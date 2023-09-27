import React from 'react'
// components/Map.js
import {useEffect, useRef} from 'react';
import {Loader} from '@googlemaps/js-api-loader';
import PropTypes from 'prop-types';
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
const color = {
    'google-blue 100': `#4285F4`,
    'white 100': `rgb(255,255,255)`,
  }
const Map = ({setMapObject}) => {
  // Specifying HTML element to which Google Maps will be embeded 
  const googlemap = useRef(null);
  useEffect(() => {
    // Loading Google Maps JavaScript API
    const loader = new Loader({
      apiKey: process.env.REACT_APP_MAP_API_KEY,
      version: 'weekly',
    });
    let map; 
    loader.load().then(() => {
      // Setting parameters for embedding Google Maps
      const initialView = {
        center: {
          lat: 34.9988127,
          lng: 135.7674863,
        },
        zoom: 14, 
      };
      const buttonsDisabled = {
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: false,
      };
      // Embedding Google Maps
      const google = window.google;
      map = new google.maps.Map(googlemap.current, {
        ...initialView,
        ...buttonsDisabled,
      });
      setMapObject(map); // NOTE

      const blueDot = {
        fillColor: color['google-blue 100'],
        fillOpacity: 1,
        path: google.maps.SymbolPath.CIRCLE,
        scale: 8,
        strokeColor: color['white 100'],
        strokeWeight: 2,
      };

    });
  }, [setMapObject]);
  return <div ref={googlemap} />;
};
Map.propTypes = {
  setMapObject: PropTypes.func.isRequired,
};
export default Map;