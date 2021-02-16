import { Grid } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import MainContainer from '../components/MainContainer';
// import PageTitle from '../components/PageTitle';
import { IncidentList } from '../features/incidents/IncidentList';
import IncidentView from '../features/incidents/IncidentView';

const Incidents = () => {
    const [incidents, setIncidents] = useState();
    const [errorMessage, setErrorMessage] = useState({
        message: false
    });
    // const classes = useStyles();
    // const [mountStatus, setMountStatus] = useState(false);

    useEffect(() => {
        return fetch(`${process.env.PORT || 'http://localhost:8080'}/incidents/get-incidents-db`)
        // downloaded a fetch polyfill 
        .then(function(response) {
            if (!response.ok) {
                // console.log(response.statusText, "first")
                setErrorMessage({message:response.statusText});
            }
            return response.json();
        }).then(function(response) {
            return response;
        }).then(items => {
            setIncidents(items)
          }).catch(function(error) {
            // console.log(error, "second")
            setErrorMessage({message:error})
        });
    }, [])
    // console.log(incidentList, errorMessage);

    return <MainContainer>
        <Grid item md={6}>
            <IncidentList state = {incidents} error={errorMessage}/>
        </Grid>
        <Grid item md={6}>
            <IncidentView />
        </Grid>
    </MainContainer>
}


export default Incidents