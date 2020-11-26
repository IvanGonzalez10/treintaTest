import React, {Component} from 'react';
import Credentials from "../../Credentials";
import Map from '../../components/Map/Map';

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${Credentials.mapsKey}`;

class Home extends Component {
  render(){
  return (
      <Map
        googleMapURL={mapURL}
        containerElement={<div style={{ height: "400px" }} />}
        mapElement={<div style={{ height: "100%" }} />}
        loadingElement={<p>Cargando</p>}
      />
    );
  };
};

export default Home;
