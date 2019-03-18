import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class TriageDashboard extends Component {
  render() {
    return (
      <div className="mapContainer">
        <div className="injuredMap">
          <Map
              google={this.props.google}
              style={{width: '50%', height: '80vw'}}
              initialCenter={{
                lat: 51.1089776,
                lng: 17.0326689
              }}
              zoom={17}
            >
              <Marker
                name={'Poszkodwowany'}
                position={{lat: 51.1089776, lng: 17.0326689}} />
              <Marker />
          </Map>
        </div>
         
        <div className="injuredForm">
          <h1>Poszkodowany nr:</h1>
          <h2>Kolor opaski: </h2>
          <h2>Lokalizacja: </h2>
          <h2>Obrazenia</h2>
         </div>
      </div> 
        
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCblUbnkuTFlV_z1Uz0L5zowqVds8iIim0")
})(TriageDashboard)
 
