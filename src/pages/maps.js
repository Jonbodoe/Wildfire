import React, { useRef, useEffect } from 'react';
import Layout from '../components/Layout';
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = process.env.REACT_APP_MAPBOXGL_ACCESSTOKEN

const Maps = () => {
    const mapContainerRef = useRef(null);

    // initialize map when component mounts
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            // See style options here: https://docs.mapbox.com/api/maps/#styles
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-75.1689107, 39.9545261],
            zoom: 12.5,
        });

        // add navigation control (the +/- zoom buttons)
        map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
        // the locate user
        map.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                trackUserLocation: true
            })
        );

        // clean up on unmount
        return () => map.remove();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    return <>
        <Layout>
        <h1>Maps</h1>
        <div className="map-container" ref={mapContainerRef} />
        </Layout>
    </>
}

export default Maps