import React, { Component } from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react';
import CustomMarker from './CustomMarker'
import mapStyles from './mapStyles';

export class TriageDashboard extends Component {

  state = {
    id: 0,
    color: "",
    lat: 0,
    lng: 0,
    injury: "",
    victims: [{
      id: 0,
      color: "black",
      lat: 51.1089776,
      lng: 17.0326689,
      injury: "head",
    },{
      id: 1,
      color: "green",
      lat: 51.108197,
      lng: 17.032295,
      injury: "hand",

    },{
      id: 2,
      color: "red",
      lat: 51.109147,
      lng: 17.031609,
      injury: "leg",

    },{
      id: 3,
      color: "yellow",
      lat: 51.108877,
      lng: 17.033186,
      injury: "eye",
    }]
  }

  componentWillMount(){
    this.setState({
      id: this.state.victims[0].id,
      color: this.state.victims[0].color,
      lat: this.state.victims[0].lat,
      lng: this.state.victims[0].lng,
      injury: this.state.victims[0].injury,
    })
  }

  handleChangeId=(e)=>{
        this.setState({
          id: e.id,
          color: this.state.victims[e.id].color,
          lat: this.state.victims[e.id].lat,
          lng: this.state.victims[e.id].lng,
          injury: this.state.victims[e.id].injury,
        })
  }

  render() {

    let markers = this.state.victims.map(vic=>{

      return <CustomMarker color={vic.color} key={vic.id} lat={vic.lat}l lng={vic.lng}  id={vic.id} onClick={this.handleChangeId}/>
    })


const defaultMapOptions = {
  styles: mapStyles
};

  console.log(defaultMapOptions)
    return (
      <div className="mapContainer">
        <div className="injuredMap">
          <Map
              google={this.props.google}
              style={{width: '40%', height: '80%'}}
              styles={defaultMapOptions.styles}

              initialCenter={{
                lat: 51.108197,
                lng: 17.0326689
              }}
              zoom={18}
            >

              {markers}

          </Map>
        </div>

        <div className="injuredForm">
          <h2>Poszkodowany nr: {this.state.id}</h2>
          <h3>Kolor opaski: {this.state.color}</h3>
          <h3>Lat: {this.state.lat}</h3>
          <h3>Lng: {this.state.lng}</h3>
          <h3>Obrazenia: {this.state.injury}</h3>
         </div>
      </div>

    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCblUbnkuTFlV_z1Uz0L5zowqVds8iIim0")
})(TriageDashboard)
