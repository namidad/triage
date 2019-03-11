import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class TriageDashboard extends Component {
    state = {
        key: "AIzaSyCblUbnkuTFlV_z1Uz0L5zowqVds8iIim0",
    }
    static defaultProps = {
        center: {
          lat: 51.1089776,
          lng: 17.0326689
        },
        zoom: 12
      };
      
  render() {
    return (
        <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: this.state.key}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
          />
        </GoogleMapReact>
      </div>
    )
  }
}
 
export default TriageDashboard
