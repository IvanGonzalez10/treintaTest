import React from 'react';
import Map from '../components/Map/Map';

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${process.env.REACT_APP_API_KEY}`;

export const Home = ()  => {
  return (
      <Map
        googleMapURL={mapURL}
        containerElement={<div style={{ height: "50vh", width:"100vw" }} />}
        mapElement={<div style={{ height: "100%", width:"100%" }} />}
        loadingElement={<p>Cargando</p>}
      />
    );
  };

