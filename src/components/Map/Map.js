import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = (props) => {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 4.683288315811562, lng: -74.05273228262928 }}
    />
  );
};

export default withScriptjs(withGoogleMap(Map));
