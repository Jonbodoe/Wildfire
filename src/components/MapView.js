import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { useSelector } from 'react-redux';
// import { getMapKey } from '../app/reducers/maps/mapsSlice';
// import { Grid, Typography } from '@material-ui/core';
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

const useStyles = makeStyles((theme) => ({
    mapContainer: {
        width: '100%',
        height: theme.spacing(50),
        backgroundColor: theme.palette.secondary.light,
        // margin: theme.spacing(0),
    }
}));

const MapView = (props) => {
    const classes = useStyles();
    const mapContainerRef = useRef(null);
    useEffect(() => {
        if (props.state) {
            mapboxgl.accessToken = props.state.token;
            const map = new mapboxgl.Map({
                container: mapContainerRef.current,
                // See style options here: https://docs.mapbox.com/api/maps/#styles
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [-118.1914, 34.2035],
                zoom: 10,
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
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    return <div className={classes.mapContainer} ref={mapContainerRef} />
}

export default MapView;