import React, { useRef, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MainContainer from '../components/MainContainer';
import PageTitle from '../components/PageTitle';
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = process.env.REACT_APP_MAPBOXGL_ACCESSTOKEN
const useStyles = makeStyles((theme) => ({
    mapContainer: {
        width: '100%',
        height: theme.spacing(70)
    }
}));

const Maps = () => {
    const classes = useStyles();
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
        <MainContainer>
        <PageTitle title={'Maps'}/>
        <Grid item md={6}>
            <div className={classes.mapContainer} ref={mapContainerRef} />
        </Grid>
        <Grid item md={6}>
            <div>hello</div>
        </Grid>
        </MainContainer>
    </>
}

export default Maps