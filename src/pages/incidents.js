import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import MainContainer from '../components/MainContainer';
// import PageTitle from '../components/PageTitle';
import IncidentList from '../features/incidents/IncidentList';
import { useSelector, useDispatch } from 'react-redux';
// import IncidentView from '../features/incidents/IncidentDetails';
import IncidentDetails from '../features/incidents/IncidentDetails';
import {
    listIncidents, fetchIncidents, errorLog, refreshState
} from './../app/reducers/incidents/incidentSlice'
// import Results from '../components/Results';

const Incidents = () => {
    const incidentsList = useSelector(listIncidents);
    const errorMessage = useSelector(errorLog);
    // const errorMessage = useSelector(errorLog);

    // "state" is a confusing prop name. Is this React "State"? A U.S. State? A loading status?
    // I changed the name to describe what it is -- `incidents`
    return <MainContainer>
        <Grid item md={6}>
            <IncidentList state={incidentsList} error={errorMessage}/>
        </Grid>
        <Grid item md={6}>
            <IncidentDetails incidents={incidentsList} error={errorMessage}/>
        </Grid>
    </MainContainer>
}


export default Incidents
