import React, { useEffect, useState, useRef } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MainContainer from '../components/MainContainer';
import MapDetails from '../features/maps/MapDetails';
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.secondary.light,
        width: '100%',
        padding: theme.spacing(2)
    },
    mapContainer: {
        width: theme.spacing(50),
        height: theme.spacing(100),
        backgroundColor: theme.palette.secondary.light,
        // margin: theme.spacing(0),
    }
}));

const Maps = () => {
    const [api, setApi] = useState();
    const [errorMessage, setErrorMessage] = useState({
        message: false
    });
    const classes = useStyles();

    useEffect(() => {
        return fetch(`${'https://wildfireics-app.herokuapp.com' || 'http://localhost:8080'}/api/mapbox`)
            .then(function (response) {
                if (!response.ok) {
                    // console.log(response.statusText, "first")
                    setErrorMessage({ message: response.statusText });
                }
                return response.json();
            }).then(function (response) {
                return response;
            }).then(items => {
                setApi(items);
            }).catch(function (error) {
                console.log('it didntttttt work from Maps API!')
                setErrorMessage({ message: error });
            });

    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return <>
        <MainContainer>
            <Grid item md={7} className={classes.container}>
                {
                    api ? <MapContainer
                        // state={api}
                        // uncomment to use API 
                        error={errorMessage}
                    /> : <Typography>loading...</Typography>
                }
            </Grid>
            <Grid item md={5}>
                <MapDetails />
            </Grid>
        </MainContainer>
    </>
}

const MapContainer = (props) => {
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
                zoom: 9.5,
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

export default Maps