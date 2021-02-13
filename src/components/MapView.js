import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { Grid, Typography } from '@material-ui/core';
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

const useStyles = makeStyles((theme) => ({
    mapContainer: {
        width: '100%',
        height: theme.spacing(70),
        backgroundColor: theme.palette.secondary.light
    }
}));

const MapView = (props) => {
    const classes = useStyles();
    const mapContainerRef = useRef(null);
    useEffect(() => {
        if (props.state) {
            mapboxgl.accessToken = props.state.token;
            console.log(props.state.token)
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
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    return <div className={classes.mapContainer} ref={mapContainerRef} />
}

// const Results = (props) => {
//     const classes = useStyles();
//     if (props.state && !props.error.message) {
//         return <div className={classes.mapContainer} ref={props.references}/>;
//     } else if (!props.state && props.error.message) {
//         return <Typography>{props.error.message.message}</Typography>;
//     } else {
//         return <Typography>Loading...</Typography>;

//     }
// }

export default MapView;