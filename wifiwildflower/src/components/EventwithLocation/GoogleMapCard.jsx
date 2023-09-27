import React, { useState } from "react";
import { GoogleMapsProvider } from "@ubilabs/google-maps-react-hooks";
import { Card, ThemeProvider } from "@mui/material";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { mapTheme } from "./GoogleMapCard.theme";

const map_options = {
    zoom: 12,
    center: {
        lat: -37.8,
        lng: 144.91
    }
};

const addMarkers = (map, lat, lng) => {
    const google = window.google;
    const marker = new google.maps.Marker({ position: { lat, lng } });
    return marker;
};

export const GoogleMapCard = (height, lat,lng)=> {
    const [mapContainer, setMapContainer] = useState(null);

    const onLoad = (map) => addMarkers(map,lat,lng);

    const mapRef = (node) => {
        node && setMapContainer(node);
    };

    const GOOGLE_MAP_API_KEY = process.env.REACT_APP_MAP_API_KEY;

    return (
        <ThemeProvider theme={mapTheme}>
            <Card sx={{ height: height }}>
                <GoogleMapsProvider
                    googleMapsAPIKey={GOOGLE_MAP_API_KEY}
                    mapOptions={map_options}
                    mapContainer={mapContainer}
                    onLoadMap={onLoad}
                >
                    <div ref={mapRef} style={{ height: "100%" }} data-testid="google-map" />
                </GoogleMapsProvider>
            </Card>
        </ThemeProvider>
    );
};
