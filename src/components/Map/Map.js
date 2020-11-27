import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

const Map = (props) => {
  return (
    <div>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 4.683288315811562, lng: -74.05273228262928 }}
      >
        <Marker position={{ lat: 4.6855593, lng: -74.0570174 }} />
        <Marker position={{ lat: 4.6828178, lng: -74.0630896 }} />
        <Marker position={{ lat: 4.6905437, lng: -74.0618934 }} />
        <Marker position={{ lat: 4.6911197, lng: -74.0621899 }} />
        <Marker position={{ lat: 4.6911197, lng: -74.0621899 }} />
        <Marker position={{ lat: 4.6906888, lng: -74.0573662 }} />
        <Marker position={{ lat: 4.6848771, lng: -74.0644404 }} />
        <Marker position={{ lat: 4.6720307, lng: -74.0701219 }} />
        <Marker position={{ lat: 4.6691039, lng: -74.0776626 }} />
        <Marker position={{ lat: 4.6662712, lng: -74.0779845 }} />
        <Marker position={{ lat: 4.6593369, lng: -74.0822975 }} />
        <Marker position={{ lat: 4.6740676, lng: -74.0602159 }} />
        <Marker position={{ lat: 4.6745809, lng: -74.0576839 }} />
        <Marker position={{ lat: 4.6667107, lng: -74.0613746 }} />
        <Marker position={{ lat: 4.6635455, lng: -74.0663957 }} />
        <Marker position={{ lat: 4.6625189, lng: -74.0700435 }} />
        <Marker position={{ lat: 4.6615689, lng: -74.0784792 }} />
        <Marker position={{ lat: 4.6794848, lng: -74.0509515 }} />
        <Marker position={{ lat: 4.6796637, lng: -74.0467625 }} />
        <Marker position={{ lat: 4.6983618, lng: -74.0462797 }} />
        <Marker position={{ lat: 4.7002322, lng: -74.0561471 }} />
        <Marker position={{ lat: 4.7076007, lng: -74.0591903 }} />
        <Marker position={{ lat: 4.7092688, lng: -74.0622373 }} />
        <Marker position={{ lat: 4.7126309, lng: -74.0677597 }} />
        <Marker position={{ lat: 4.6853411, lng: -74.0610115 }} />
      </GoogleMap>
    </div>
  );
};

export default withScriptjs(withGoogleMap(Map));
