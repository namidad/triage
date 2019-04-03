import React, { Component } from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react';
import CustomMarker from './CustomMarker'
import { Checkbox } from 'semantic-ui-react'
import mapStyles from './mapStyles';
import { connect } from 'react-redux'


export class TriageDashboard extends Component {

  state = {
    id: 0,
    color: "",
    lat: 0,
    lng: 0,
    injury: "",
    green: true,
    yellow: true,
    red: true,
    black: true,
    victims: this.props.victims,
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

  handleChecked = (e) => {
    let bool;
    if(e==="green"){
      bool=!this.state.green;
    } else if (e==="yellow") {
      bool=!this.state.yellow;
    } else if (e==="red") {
      bool=!this.state.red;
    } else if (e==="black") {
      bool=!this.state.black;
    }
    this.setState({
      [e]: bool
    })

  }

  render() {

    let markers = this.state.victims.map(vic=>{
      if(vic.color==="green"){
        if(this.state.green){
          return <CustomMarker color={vic.color} key={vic.id} lat={vic.lat} lng={vic.lng}  id={vic.id} onClick={this.handleChangeId}/>
        }
      } else if (vic.color==="red"){
        if(this.state.red){
          return <CustomMarker color={vic.color} key={vic.id} lat={vic.lat} lng={vic.lng}  id={vic.id} onClick={this.handleChangeId}/>
        }
      } else if (vic.color==="black") {
        if(this.state.black){
          return <CustomMarker color={vic.color} key={vic.id} lat={vic.lat} lng={vic.lng}  id={vic.id} onClick={this.handleChangeId}/>
        }
      } else if (vic.color==="yellow") {
        if(this.state.yellow){
          return <CustomMarker color={vic.color} key={vic.id} lat={vic.lat} lng={vic.lng}  id={vic.id} onClick={this.handleChangeId}/>
        }
      }

      return null;
    })

    if(this.props.logged){
      return (
        <div className="mapContainer">
          <div className="injuredMap">
          <Checkbox onChange={ e => this.handleChecked("green") }  label='Show green band' defaultChecked/>
          <Checkbox onChange={ e => this.handleChecked("yellow") } value="yellow" label='Show yellow band' defaultChecked/>
          <Checkbox onChange={ e => this.handleChecked("red") } value="red" label='Show red band' defaultChecked/>
          <Checkbox onChange={ e => this.handleChecked("black") } value="black" label='Show black band' defaultChecked/>
            <Map
                google={this.props.google}
                style={{width: '40%', height: '80%'}}
                styles={mapStyles}

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
}

const mapStateToProps = (state) => {
  return {
    logged: state.user.isLogged,
    victims: state.victims.victims,
  }
}


export default connect(mapStateToProps)(GoogleApiWrapper({
  apiKey: ("AIzaSyCblUbnkuTFlV_z1Uz0L5zowqVds8iIim0")
})(TriageDashboard))
