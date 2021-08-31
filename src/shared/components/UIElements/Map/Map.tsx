import React, { 
    DetailedHTMLProps, 
    HTMLAttributes, 
    createRef,
    useEffect } from 'react';

import './Map.css'

class MapProps{
    className?: string = '';
    style?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    zoom?: number;
    center?: { lat: number; lng: number; };
}

const Map = (props:MapProps) => {
    const mapRef = createRef<HTMLDivElement>();
    const {center, zoom} = props;
    useEffect(() => {
        const map = new (window as any).google.maps.Map(mapRef.current, {
            center: center,
            zoom: zoom
        });
    
        new (window as any).google.maps.Marker({position: center, map: map})
    },[center, zoom,mapRef])
    


    return <div ref={mapRef} className={`map ${props.className}`} style={props.style}></div>
}

export default Map;