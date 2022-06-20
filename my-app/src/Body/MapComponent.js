import React from "react";
import { GoogleMap, useJsApiLoader, InfoWindow } from "@react-google-maps/api";
import { google_api_key } from "../keys";


const containerStyle = {
  height: "400px",
};


export default function MapComponent(props) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: google_api_key,
  });

  const center = {
    lat: props.weather.coord.lat,
    lng: props.weather.coord.lon
  };

  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          {props.weather.main && (<InfoWindow position={center}>
            <div style={{ fontSize: 20, fontColor: `#08233B` }}>
              {props.weather.main.temp}
            </div>
          </InfoWindow>)}
        </GoogleMap>
      )}
    </>
  )
}



