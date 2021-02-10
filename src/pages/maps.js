import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import MainContainer from '../components/MainContainer';
import PageTitle from '../components/PageTitle';
import MapView from '../components/MapView';


const Maps = () => {
    const [api, setApi] = useState();
    const [errorMessage, setErrorMessage] = useState({
        message: false
    });

    useEffect(() => {
        return fetch(`${process.env.PORT || 'http://localhost:8080'}/api/mapbox`)
        // Should use Axios versus fetch API? 
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
            // console.log(error, "second")
            setErrorMessage({message:error})
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    return <>
        <MainContainer>
        <PageTitle title={'Maps'}/>
        <Grid item md={6}>
            <MapView state={api} error={errorMessage}/>
        </Grid>
        <Grid item md={6}>
        </Grid>
        </MainContainer>
    </>
}

export default Maps