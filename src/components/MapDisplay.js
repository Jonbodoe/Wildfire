import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import MainContainer from '../components/MainContainer';
// import PageTitle from '../components/PageTitle';
import MapView from './MapView';
// import MapDetails from '../features/maps/MapDetails';
// import MapDetails from './sub-pages/MapDetails';
const width = 250;

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.secondary.light,
        // width: '300px'
        width: `calc(100% - ${width}px)`,
        // height: theme.spacing(50)
    }
}));

const MapDisplay = () => {
    const [api, setApi] = useState();
    const [errorMessage, setErrorMessage] = useState({
        message: false
    });
    const classes = useStyles();

    useEffect(() => {
        return fetch(`${process.env.PORT || 'https://wildfireics-app.herokuapp.com'}/api/mapbox`)
        .then(function(response) {
            if (!response.ok) {
                // console.log(response.statusText, "first")
                setErrorMessage({message:response.statusText});
            }
            return response.json();
        }).then(function(response) {
            return response;
        }).then(items => {
            setApi(items);
          }).catch(function(error) {
            console.log('it didntttttt work from Maps API!')
            setErrorMessage({message:error});
        });
        
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    // console.log(api, 'api')

    return <>
        <Grid item className={classes.container}> 
        {/* <div className={classes.container}> */}
            {
                api? <MapView 
                    // state={api}
                    // uncomment to use API 
                    error={errorMessage}
                /> : <Typography>loading...</Typography>
            }
        </Grid>
        {/* </div> */}
    </>
}

export default MapDisplay