import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MainContainer from '../components/MainContainer';
// import PageTitle from '../components/PageTitle';
import MapView from '../components/MapView';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.secondary.light,
        margin: theme.spacing(1,2),
    }
}));

const Maps = () => {
    const [api, setApi] = useState();
    const [errorMessage, setErrorMessage] = useState({
        message: false
    });
    const classes = useStyles();

    useEffect(() => {
        return fetch(`${process.env.PORT || 'http://localhost:8080'}/api/mapbox`)
        .then(function(response) {
            if (!response.ok) {
                // console.log(response.statusText, "first")
                setErrorMessage({message:response.statusText});
            }
            return response.json();
        }).then(function(response) {
            return response;
        }).then(items => {
            console.log('it worked!')
            setApi(items);
          }).catch(function(error) {
            console.log('it didntttttt work!')
            setErrorMessage({message:error});
        });
        
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    console.log(api, 'api')

    return <>
        <MainContainer>
        <Grid item md={6} className={classes.container}>
            {
                api? <MapView state={api} error={errorMessage}/> : <Typography>loading...</Typography>
            }
        </Grid>
        <Grid item md={6}>
        </Grid>
        </MainContainer>
    </>
}

export default Maps