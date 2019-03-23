import React from 'react';
import {Marker} from 'google-maps-react';

const CustomMarker = (props) => {
    let image;
    if(props.color === 'red'){
      image = 'http://labs.google.com/ridefinder/images/mm_20_red.png';
    } else if(props.color==='yellow'){
      image = 'http://labs.google.com/ridefinder/images/mm_20_yellow.png';
    } else if(props.color==='green'){
      image = 'http://labs.google.com/ridefinder/images/mm_20_green.png';
    } else if(props.color==='black'){
      image = 'http://labs.google.com/ridefinder/images/mm_20_black.png';
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
