import React from 'react';
import {Marker} from 'google-maps-react';

const CustomMarker = (props) => {
    const {id} = props;
    let image;
    if(props.color === 'red'){
      image = 'http://maps.google.com/mapfiles/ms/icons/red.png';
    } else if(props.color==='yellow'){
      image = 'http://maps.google.com/mapfiles/ms/icons/yellow.png';
    } else if(props.color==='green'){
      image = 'http://maps.google.com/mapfiles/ms/icons/green.png';
    }
    return (
        <Marker
            onClick={props.onChangeId}
            icon={image}
            position={{lat: props.lat, lng: props.lng}}
            {...props}
        />
    );
};

export default CustomMarker;
